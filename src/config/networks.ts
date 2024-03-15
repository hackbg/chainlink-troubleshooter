const ethMainnetRpcUrl = process.env.NEXT_PUBLIC_ETH_MAINNET_RPC_URL
const ethSepoliaRpcUrl = process.env.NEXT_PUBLIC_ETH_SEPOLIA_RPC_URL
const polygonMainnetRpcUrl = process.env.NEXT_PUBLIC_POLYGON_MAINNET_RPC_URL
const polygonMumbaiRpcUrl = process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC_URL

export type Network = {
  name: string
  rpcUrl: string | undefined
}

export const networks: Record<string, Network> = {}

if (ethMainnetRpcUrl) {
  networks.ethMainnet = {
    name: 'Ethereum Mainnet',
    rpcUrl: ethMainnetRpcUrl,
  }
}
if (ethSepoliaRpcUrl) {
  networks.ethSepolia = {
    name: 'Ethereum Sepolia',
    rpcUrl: ethSepoliaRpcUrl,
  }
}
if (polygonMainnetRpcUrl) {
  networks.polygonMainnet = {
    name: 'Polygon Mainnet',
    rpcUrl: polygonMainnetRpcUrl,
  }
}
if (polygonMumbaiRpcUrl) {
  networks.polygonMumbai = {
    name: 'Polygon Mumbai',
    rpcUrl: polygonMumbaiRpcUrl,
  }
}
