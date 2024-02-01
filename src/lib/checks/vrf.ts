import { createPublicClient, decodeEventLog, http, parseAbi } from 'viem'

export const checkFulfillFunction = async (
  requestTxHash: string,
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
      'event RandomWordsRequested(bytes32 indexed keyHash,uint256 requestId,uint256 preSeed,uint64 indexed subId,uint16 minimumRequestConfirmations,uint32 callbackGasLimit,uint32 numWords,address indexed sender)',
    ]),
    data: txReceipt?.logs[0].data,
    topics: txReceipt?.logs[0].topics,
  })

  const vrfCoordinator = txReceipt?.logs[0].address
  const vrfConsumer = log?.args.sender
  const requestId = log?.args.requestId

  let fulfillSimulationSuccess = false
  try {
    await client.simulateContract({
      address: vrfConsumer,
      abi: parseAbi([
        'function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords)',
      ]),
      functionName: 'rawFulfillRandomWords',
      args: [requestId, [BigInt(1)]],
      account: vrfCoordinator,
    })
    fulfillSimulationSuccess = true
  } catch (e) {
    console.log(e)
  }

  if (fulfillSimulationSuccess) {
    return {
      status: 'Pass',
      details: 'The fulfill function is not reverting',
    }
  } else {
    return {
      status: 'Fail',
      details: 'The fulfill function is reverting',
    }
  }
}

export const checkGasLimit = async (
  requestTxHash: string,
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
      'event RandomWordsRequested(bytes32 indexed keyHash,uint256 requestId,uint256 preSeed,uint64 indexed subId,uint16 minimumRequestConfirmations,uint32 callbackGasLimit,uint32 numWords,address indexed sender)',
    ]),
    data: txReceipt?.logs[0].data,
    topics: txReceipt?.logs[0].topics,
  })

  const vrfCoordinator = txReceipt?.logs[0].address
  const vrfConsumer = log?.args.sender
  const requestId = log?.args.requestId
  const gasLimit = log?.args.callbackGasLimit

  let fulfillSimulationSuccess = false
  let gasEstimate = 0
  try {
    const result = await client.estimateContractGas({
      address: vrfConsumer,
      abi: parseAbi([
        'function rawFulfillRandomWords(uint256 requestId, uint256[] memory randomWords)',
      ]),
      functionName: 'rawFulfillRandomWords',
      args: [requestId, [BigInt(1)]],
      account: vrfCoordinator,
    })
    gasEstimate = Number(result)
    fulfillSimulationSuccess = true
  } catch (e) {
    console.log(e)
  }

  if (!fulfillSimulationSuccess) {
    return {
      status: 'Fail',
      details:
        'The fulfill function is reverting and preventing the simulation',
    }
  }

  if (gasEstimate > gasLimit) {
    return {
      status: 'Fail',
      details:
        'The fulfill function is using more gas than the specified limit',
    }
  } else {
    return {
      status: 'Pass',
      details:
        'The fulfill function is using less gas than the specified limit',
    }
  }
}

export const checks = [
  {
    name: 'Consumer fulfill function',
    fn: checkFulfillFunction,
  },
  {
    name: 'Consumer gas limit',
    fn: checkGasLimit,
  },
]
