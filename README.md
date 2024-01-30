# Chainlink Services Troubleshooter

A DevTool for finding and resolving common issues with Chainlink services like Automation, VRF, CCIP.

## Features

- [x] Troubleshoot Upkeep
- [ ] Troubleshoot VRF
- [ ] Troubleshoot CCIP

## Usage

The troubleshooter is available [here](chainlink-troubleshooter.vercel.app) or can be run locally by following the instructions below.

## Requirements

- Node.js v18.17.0
- pnpm (or npm / yarn)

## Getting Started

1. Clone the repo to your local machine by running `git clone git@github.com:hackbg/chainlink-troubleshooter.git`
2. Run `pnpm install` in your terminal or `npm install` / `yarn` if you don't have `pnpm` installed globally
3. Setup your `.env` file by copying `.env.example` to `.env` and filling in the values
4. Run `pnpm run dev` in your terminal, and then open [localhost:3000](http://localhost:3000) in your browser

## Contributing

If you'd like to add a new check to the troubleshooter, you can submit an issue with a description or a PR with the following changes:

1. Add a new function to `src/lib/checks.ts` by following the example of the other checks
2. Export the function and add it to the `checks` array in `src/lib/checks.ts`
3. Test your new check manually by running `pnpm run dev`

## Tech Stack

- [viem](https://viem.sh/)
- [wagmi](https://wagmi.sh/)
- [Next.js](https://nextjs.org/)