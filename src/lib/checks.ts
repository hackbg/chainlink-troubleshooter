import { KeeperRegistryContractConfig } from '@/config/contracts'
import { createPublicClient, http, parseAbi } from 'viem'

export const checkUpkeepFunction = async (
  upkeepId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  const data = await client.readContract({
    address: KeeperRegistryContractConfig.address,
    abi: KeeperRegistryContractConfig.abi,
    functionName: 'getUpkeep',
    args: [BigInt(upkeepId)],
  })

  const upkeepContract = data.target

  let simulation
  try {
    simulation = await client.simulateContract({
      address: upkeepContract,
      abi: parseAbi([
        'function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData)',
      ]),
      functionName: 'checkUpkeep',
      args: ['0x'],
    })
  } catch (e) {
    console.log(e) // TODO: extract error message
  }

  if (simulation?.result) {
    return {
      status: 'Pass',
      details: 'No issues found',
    }
  } else {
    return {
      status: 'Fail',
      details: 'The upkeep function is reverting',
    }
  }
}

export const checks = [
  {
    name: 'Upkeep function',
    fn: checkUpkeepFunction,
  },
]
