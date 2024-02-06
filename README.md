# Chainlink Services Troubleshooter

A DevTool for finding and resolving common issues with Chainlink services like Automation, VRF, CCIP.

## Features

- Troubleshoot Upkeep
  - [x] Check if check function reverts
  - [x] Check if perform function reverts
  - [x] Check if gas limit is sufficient
- Troubleshoot VRF
  - Subscription based
    - [x] Check if fulfill function reverts
    - [x] Check if gas limit is sufficient
    - [ ] Check if balance is sufficient
  - Direct funding
    - [ ] Check if fulfill function reverts
    - [ ] Check if gas limit is sufficient
    - [ ] Check if transaction is funded
- Troubleshoot CCIP
- Troubleshoot Data Streams
- Troubleshoot Functions

## Usage

The troubleshooter is available [here](https://chainlink-troubleshooter.vercel.app) or can be run locally by following the instructions below.

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

1. Add a new function to `src/lib/checks/[service].ts` by following the example of the other checks
2. Export the function and add it to the `checks` array
3. Test your new check manually by running `pnpm run dev`

## Testing

Until automated tests are added, you can manually test the troubleshooter by performing the following test cases on Sepolia testnet.

<details>
  <summary>Automation</summary>

- All checks passing: `74895721406186895113818631164529303066999571709016139650513084521543416732417`
- Check function reverting:
  `35848537152715803869252321519866842446385537711545467731000141614540581954617`
- Perform function reverting:
  `18323631240448564451197605370481726567400230480287900632671193320924480480751`
- Unsufficient gas limit: `38143267683781744531098180450779920218425556575283977500348911855574876509234`
</details>

<details>
  <summary>VRF</summary>

- All checks passing: `0x8888bbe4156c339af26902ef198e7c70863a59f9e0fca3cc7dc91c712270b108`
- Reverting fulfill function: `0xb54351456875787f8d54b00c9100db54370fbdc52f9f81a4283b172a57fd2f39`
- Low gas limit: `0x047174b294c9f6ae5d0786cdf9d0ba429b329de94a700dde216f4fc33577ee2c`
</details>

## Tech Stack

- [viem](https://viem.sh/)
- [wagmi](https://wagmi.sh/)
- [Next.js](https://nextjs.org/)
