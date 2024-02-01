export const checkFulfillFunction = async (
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
    name: 'Check Fulfill Function',
    fn: checkFulfillFunction,
  },
]
