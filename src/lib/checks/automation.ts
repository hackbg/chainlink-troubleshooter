import { KeeperRegistryContractConfig } from '@/config/contracts'
import { Address, createPublicClient, http, parseAbi } from 'viem'
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'

type UpkeepConfigResponse = {
  target: Address
  checkData: `0x${string}`
  performGas: number
}

export const checkUpkeepFunction = async (
  upkeepId: string,
  networkId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  if (
    !KeeperRegistryContractConfig.address ||
    KeeperRegistryContractConfig.address[networkId] === undefined
  ) {
    return {
      status: 'Fail',
      details: 'Keeper registry contract not configured for this network',
    }
  }

  const data = (await client.readContract({
    address: KeeperRegistryContractConfig.address[networkId],
    abi: KeeperRegistryContractConfig.abi,
    functionName: 'getUpkeep',
    args: [BigInt(upkeepId)],
  })) as UpkeepConfigResponse

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
  networkId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  if (
    !KeeperRegistryContractConfig.address ||
    KeeperRegistryContractConfig.address[networkId] === undefined
  ) {
    return {
      status: 'Fail',
      details: 'Keeper registry contract not configured for this network',
    }
  }

  // Get the target contract
  const data = await client.readContract({
    address: KeeperRegistryContractConfig.address[networkId],
    abi: KeeperRegistryContractConfig.abi,
    functionName: 'getUpkeep',
    args: [BigInt(upkeepId)],
  }) as UpkeepConfigResponse

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

export const checkUpkeepGasLimit = async (
  upkeepId: string,
  networkId: string,
  rpcUrl: string | undefined,
) => {
  const client = createPublicClient({
    transport: http(rpcUrl),
  })

  if (
    !KeeperRegistryContractConfig.address ||
    KeeperRegistryContractConfig.address[networkId] === undefined
  ) {
    return {
      status: 'Fail',
      details: 'Keeper registry contract not configured for this network',
    }
  }

  // Get the target contract
  const data = await client.readContract({
    address: KeeperRegistryContractConfig.address[networkId],
    abi: KeeperRegistryContractConfig.abi,
    functionName: 'getUpkeep',
    args: [BigInt(upkeepId)],
  }) as UpkeepConfigResponse

  const upkeepContract = data.target
  const upkeepCheckData = data.checkData
  const performGasLimit = data.performGas

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
  let gasEstimate = 0
  try {
    const result = await client.estimateContractGas({
      address: upkeepContract,
      abi: parseAbi([
        'function performUpkeep(bytes calldata performData) external',
      ]),
      functionName: 'performUpkeep',
      args: [performData],
      account: generateRandomAddress(),
    })
    gasEstimate = Number(result)
    performSimulationSuccess = true
  } catch (e) {
    console.log(e) // TODO: extract error message
  }

  if (!performSimulationSuccess) {
    return {
      status: 'Fail',
      details:
        'The perform function is reverting and preventing the simulation',
    }
  }

  if (gasEstimate > performGasLimit) {
    return {
      status: 'Fail',
      details: `The perform function is using more gas than the specified gas limit. The gas limit is ${performGasLimit} and the gas estimate is ${gasEstimate}`,
    }
  } else {
    return {
      status: 'Pass',
      details: 'No issues found',
    }
  }
}

const generateRandomAddress = () => {
  const privateKey = generatePrivateKey()
  const account = privateKeyToAccount(privateKey)
  return account.address
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
  {
    name: 'Upkeep gas limit',
    fn: checkUpkeepGasLimit,
  },
]
