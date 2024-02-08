export const checkRouterAddress = (
  requestTxHash: string,
  rpcUrl: string | undefined,
) => {
  return {
    status: 'Fail',
    details: 'Not implemented',
  }
}

export const checks = [
  {
    name: 'Check Router Address',
    fn: checkRouterAddress,
  },
]
