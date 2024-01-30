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
  const upkeepCheckData = data.checkData

  let simulation
  try {
    simulation = await client.simulateContract({
      address: upkeepContract,
      abi: parseAbi([
        'function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData)',
      ]),
      functionName: 'checkUpkeep',
      args: [upkeepCheckData],
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
      details: 'The check function is reverting',
    }
  }
}

export const checkUpkeepPerfromFunction = async (
  upkeepId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  // Get the target contract
  const data = await client.readContract({
    address: KeeperRegistryContractConfig.address,
    abi: KeeperRegistryContractConfig.abi,
    functionName: 'getUpkeep',
    args: [BigInt(upkeepId)],
  })

  const upkeepContract = data.target
  const upkeepCheckData = data.checkData

  // Get the perform data
  let checkSimulation
  try {
    checkSimulation = await client.simulateContract({
      address: upkeepContract,
      abi: parseAbi([
        'function checkUpkeep(bytes calldata checkData) external returns (bool upkeepNeeded, bytes memory performData)',
      ]),
      functionName: 'checkUpkeep',
      args: [upkeepCheckData],
    })
  } catch (e) {
    console.log(e) // TODO: extract error message
  }

  if (!checkSimulation?.result) {
    return {
      status: 'Fail',
      details: 'The check function is reverting and preventing the simulation',
    }
  }

  // Simulate the perform function
  const performData = checkSimulation?.result[1] as `0x${string}`

  let performSimulationSuccess = false
  try {
    await client.simulateContract({
      address: upkeepContract,
      abi: parseAbi([
        'function performUpkeep(bytes calldata performData) external',
      ]),
      functionName: 'performUpkeep',
      args: [performData],
    })
    performSimulationSuccess = true
  } catch (e) {
    console.log(e) // TODO: extract error message
  }

  if (performSimulationSuccess) {
    return {
      status: 'Pass',
      details: 'No issues found',
    }
  } else {
    return {
      status: 'Fail',
      details: 'The perform function is reverting with the given perform data',
    }
  }
}

export const checks = [
  {
    name: 'Upkeep check function',
    fn: checkUpkeepFunction,
  },
  {
    name: 'Upkeep perform function',
    fn: checkUpkeepPerfromFunction,
  },
]
