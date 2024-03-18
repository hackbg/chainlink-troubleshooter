import { createPublicClient, decodeEventLog, http, parseAbi } from 'viem'

const supportedDestinationChains: Record<string, string[]> = {
  ethSepolia: [
    '12532609583862916517', // Polygon Mumbai
    '5224473277236331295', // Optimism Sepolia
    '3478487238524512106', // Arbitrum Sepolia
    '14767482510784806043', // Fuji Testnet
    '13264668187771770619', // BNB Chain Testnet
    '9284632837123596123', // Wemix Testnet
    '5990477251245693094', // Kroma Sepolia Testnet
  ],
}

export const checkDestinationChain = async (
  requestTxHash: string,
  networkId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  const txReceipt = await client.getTransactionReceipt({
    hash: requestTxHash as `0x${string}`,
  })

  const log = decodeEventLog({
    abi: parseAbi([
      'event TokensTransferred(bytes32 indexed messageId,uint64 indexed destinationChainSelector,address receiver,address token,uint256 tokenAmount,address feeToken,uint256 fees)',
    ]),
    data: txReceipt?.logs[10].data,
    topics: txReceipt?.logs[10].topics,
  })

  const destinationChain = log.args.destinationChainSelector.toString()

  if (!supportedDestinationChains[networkId]) {
    return {
      status: 'Fail',
      details: 'The network is not configured',
    }
  }

  if (supportedDestinationChains[networkId].includes(destinationChain)) {
    return {
      status: 'Pass',
      details: 'The destination chain is supported',
    }
  } else {
    return {
      status: 'Fail',
      details: 'The destination chain is not supported',
    }
  }
}

export const checks = [
  {
    name: 'Destination chain selector',
    fn: checkDestinationChain,
  },
]
