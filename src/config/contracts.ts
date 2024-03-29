import { Abi, Address } from 'viem'

export type ContractConfig = {
  address?: Record<string, Address>
  abi: Abi
}

export const KeeperRegistryContractConfig: ContractConfig = {
  address: {
    ethMainnet: '0x6593c7De001fC8542bB1703532EE1E5aA0D458fD',
    ethSepolia: '0x86EFBD0b6736Bed994962f9797049422A3A8E8Ad',
    polygonMainnet: '0x08a8eea76D2395807Ce7D1FC942382515469cCA1',
    polygonMumbai: '0xf97C091179A4A4d666da7a2764dDeD4F932FC14A',
  },
  abi: [
    {
      inputs: [
        {
          internalType: 'enum KeeperRegistryBase2_1.Mode',
          name: 'mode',
          type: 'uint8',
        },
        { internalType: 'address', name: 'link', type: 'address' },
        { internalType: 'address', name: 'linkNativeFeed', type: 'address' },
        { internalType: 'address', name: 'fastGasFeed', type: 'address' },
        {
          internalType: 'address',
          name: 'automationForwarderLogic',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [], name: 'ArrayHasNoEntries', type: 'error' },
    { inputs: [], name: 'CannotCancel', type: 'error' },
    { inputs: [], name: 'CheckDataExceedsLimit', type: 'error' },
    { inputs: [], name: 'ConfigDigestMismatch', type: 'error' },
    { inputs: [], name: 'DuplicateEntry', type: 'error' },
    { inputs: [], name: 'DuplicateSigners', type: 'error' },
    { inputs: [], name: 'GasLimitCanOnlyIncrease', type: 'error' },
    { inputs: [], name: 'GasLimitOutsideRange', type: 'error' },
    { inputs: [], name: 'IncorrectNumberOfFaultyOracles', type: 'error' },
    { inputs: [], name: 'IncorrectNumberOfSignatures', type: 'error' },
    { inputs: [], name: 'IncorrectNumberOfSigners', type: 'error' },
    { inputs: [], name: 'IndexOutOfRange', type: 'error' },
    { inputs: [], name: 'InsufficientFunds', type: 'error' },
    { inputs: [], name: 'InvalidDataLength', type: 'error' },
    { inputs: [], name: 'InvalidPayee', type: 'error' },
    { inputs: [], name: 'InvalidRecipient', type: 'error' },
    { inputs: [], name: 'InvalidReport', type: 'error' },
    { inputs: [], name: 'InvalidTrigger', type: 'error' },
    { inputs: [], name: 'InvalidTriggerType', type: 'error' },
    { inputs: [], name: 'MaxCheckDataSizeCanOnlyIncrease', type: 'error' },
    { inputs: [], name: 'MaxPerformDataSizeCanOnlyIncrease', type: 'error' },
    { inputs: [], name: 'MigrationNotPermitted', type: 'error' },
    { inputs: [], name: 'NotAContract', type: 'error' },
    { inputs: [], name: 'OnlyActiveSigners', type: 'error' },
    { inputs: [], name: 'OnlyActiveTransmitters', type: 'error' },
    { inputs: [], name: 'OnlyCallableByAdmin', type: 'error' },
    { inputs: [], name: 'OnlyCallableByLINKToken', type: 'error' },
    { inputs: [], name: 'OnlyCallableByOwnerOrAdmin', type: 'error' },
    { inputs: [], name: 'OnlyCallableByOwnerOrRegistrar', type: 'error' },
    { inputs: [], name: 'OnlyCallableByPayee', type: 'error' },
    { inputs: [], name: 'OnlyCallableByProposedAdmin', type: 'error' },
    { inputs: [], name: 'OnlyCallableByProposedPayee', type: 'error' },
    { inputs: [], name: 'OnlyCallableByUpkeepPrivilegeManager', type: 'error' },
    { inputs: [], name: 'OnlyPausedUpkeep', type: 'error' },
    { inputs: [], name: 'OnlySimulatedBackend', type: 'error' },
    { inputs: [], name: 'OnlyUnpausedUpkeep', type: 'error' },
    { inputs: [], name: 'ParameterLengthError', type: 'error' },
    { inputs: [], name: 'PaymentGreaterThanAllLINK', type: 'error' },
    { inputs: [], name: 'ReentrantCall', type: 'error' },
    { inputs: [], name: 'RegistryPaused', type: 'error' },
    { inputs: [], name: 'RepeatedSigner', type: 'error' },
    { inputs: [], name: 'RepeatedTransmitter', type: 'error' },
    {
      inputs: [{ internalType: 'bytes', name: 'reason', type: 'bytes' }],
      name: 'TargetCheckReverted',
      type: 'error',
    },
    { inputs: [], name: 'TooManyOracles', type: 'error' },
    { inputs: [], name: 'TranscoderNotSet', type: 'error' },
    { inputs: [], name: 'UpkeepAlreadyExists', type: 'error' },
    { inputs: [], name: 'UpkeepCancelled', type: 'error' },
    { inputs: [], name: 'UpkeepNotCanceled', type: 'error' },
    { inputs: [], name: 'UpkeepNotNeeded', type: 'error' },
    { inputs: [], name: 'ValueNotChanged', type: 'error' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'privilegeConfig',
          type: 'bytes',
        },
      ],
      name: 'AdminPrivilegeConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'trigger',
          type: 'bytes',
        },
      ],
      name: 'CancelledUpkeepReport',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'dedupKey',
          type: 'bytes32',
        },
      ],
      name: 'DedupKeyAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'amount',
          type: 'uint96',
        },
      ],
      name: 'FundsAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'FundsWithdrawn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'trigger',
          type: 'bytes',
        },
      ],
      name: 'InsufficientFundsUpkeepReport',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint96',
          name: 'amount',
          type: 'uint96',
        },
      ],
      name: 'OwnerFundsWithdrawn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address[]',
          name: 'transmitters',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'payees',
          type: 'address[]',
        },
      ],
      name: 'PayeesUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'PayeeshipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'PayeeshipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'transmitter',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'address',
          name: 'payee',
          type: 'address',
        },
      ],
      name: 'PaymentWithdrawn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'trigger',
          type: 'bytes',
        },
      ],
      name: 'ReorgedUpkeepReport',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'trigger',
          type: 'bytes',
        },
      ],
      name: 'StaleUpkeepReport',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'UpkeepAdminTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'UpkeepAdminTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: true,
          internalType: 'uint64',
          name: 'atBlockHeight',
          type: 'uint64',
        },
      ],
      name: 'UpkeepCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'newCheckData',
          type: 'bytes',
        },
      ],
      name: 'UpkeepCheckDataSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'gasLimit',
          type: 'uint96',
        },
      ],
      name: 'UpkeepGasLimitSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'remainingBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'destination',
          type: 'address',
        },
      ],
      name: 'UpkeepMigrated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'offchainConfig',
          type: 'bytes',
        },
      ],
      name: 'UpkeepOffchainConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
      ],
      name: 'UpkeepPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        { indexed: true, internalType: 'bool', name: 'success', type: 'bool' },
        {
          indexed: false,
          internalType: 'uint96',
          name: 'totalPayment',
          type: 'uint96',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'gasUsed',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'gasOverhead',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'trigger',
          type: 'bytes',
        },
      ],
      name: 'UpkeepPerformed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'privilegeConfig',
          type: 'bytes',
        },
      ],
      name: 'UpkeepPrivilegeConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startingBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'importedFrom',
          type: 'address',
        },
      ],
      name: 'UpkeepReceived',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'performGas',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'UpkeepRegistered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'triggerConfig',
          type: 'bytes',
        },
      ],
      name: 'UpkeepTriggerConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
      ],
      name: 'UpkeepUnpaused',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'transmitter', type: 'address' },
      ],
      name: 'acceptPayeeship',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'acceptUpkeepAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'startIndex', type: 'uint256' },
        { internalType: 'uint256', name: 'maxCount', type: 'uint256' },
      ],
      name: 'getActiveUpkeepIDs',
      outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'admin', type: 'address' }],
      name: 'getAdminPrivilegeConfig',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAutomationForwarderLogic',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'getBalance',
      outputs: [{ internalType: 'uint96', name: 'balance', type: 'uint96' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCancellationDelay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getConditionalGasOverhead',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getFastGasFeedAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'upkeepID', type: 'uint256' }],
      name: 'getForwarder',
      outputs: [
        {
          internalType: 'contract IAutomationForwarder',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLinkAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLinkNativeFeedAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLogGasOverhead',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'enum KeeperRegistryBase2_1.Trigger',
          name: 'triggerType',
          type: 'uint8',
        },
        { internalType: 'uint32', name: 'gasLimit', type: 'uint32' },
      ],
      name: 'getMaxPaymentForGas',
      outputs: [{ internalType: 'uint96', name: 'maxPayment', type: 'uint96' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'getMinBalance',
      outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'getMinBalanceForUpkeep',
      outputs: [{ internalType: 'uint96', name: 'minBalance', type: 'uint96' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMode',
      outputs: [
        {
          internalType: 'enum KeeperRegistryBase2_1.Mode',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'peer', type: 'address' }],
      name: 'getPeerRegistryMigrationPermission',
      outputs: [
        {
          internalType: 'enum KeeperRegistryBase2_1.MigrationPermission',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPerPerformByteGasOverhead',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPerSignerGasOverhead',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'query', type: 'address' }],
      name: 'getSignerInfo',
      outputs: [
        { internalType: 'bool', name: 'active', type: 'bool' },
        { internalType: 'uint8', name: 'index', type: 'uint8' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getState',
      outputs: [
        {
          components: [
            { internalType: 'uint32', name: 'nonce', type: 'uint32' },
            {
              internalType: 'uint96',
              name: 'ownerLinkBalance',
              type: 'uint96',
            },
            {
              internalType: 'uint256',
              name: 'expectedLinkBalance',
              type: 'uint256',
            },
            { internalType: 'uint96', name: 'totalPremium', type: 'uint96' },
            { internalType: 'uint256', name: 'numUpkeeps', type: 'uint256' },
            { internalType: 'uint32', name: 'configCount', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'latestConfigBlockNumber',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'latestConfigDigest',
              type: 'bytes32',
            },
            { internalType: 'uint32', name: 'latestEpoch', type: 'uint32' },
            { internalType: 'bool', name: 'paused', type: 'bool' },
          ],
          internalType: 'struct KeeperRegistryBase2_1.State',
          name: 'state',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'uint32',
              name: 'paymentPremiumPPB',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'flatFeeMicroLink',
              type: 'uint32',
            },
            { internalType: 'uint32', name: 'checkGasLimit', type: 'uint32' },
            {
              internalType: 'uint24',
              name: 'stalenessSeconds',
              type: 'uint24',
            },
            {
              internalType: 'uint16',
              name: 'gasCeilingMultiplier',
              type: 'uint16',
            },
            { internalType: 'uint96', name: 'minUpkeepSpend', type: 'uint96' },
            { internalType: 'uint32', name: 'maxPerformGas', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'maxCheckDataSize',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'maxPerformDataSize',
              type: 'uint32',
            },
            {
              internalType: 'uint32',
              name: 'maxRevertDataSize',
              type: 'uint32',
            },
            {
              internalType: 'uint256',
              name: 'fallbackGasPrice',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'fallbackLinkPrice',
              type: 'uint256',
            },
            { internalType: 'address', name: 'transcoder', type: 'address' },
            {
              internalType: 'address[]',
              name: 'registrars',
              type: 'address[]',
            },
            {
              internalType: 'address',
              name: 'upkeepPrivilegeManager',
              type: 'address',
            },
          ],
          internalType: 'struct KeeperRegistryBase2_1.OnchainConfig',
          name: 'config',
          type: 'tuple',
        },
        { internalType: 'address[]', name: 'signers', type: 'address[]' },
        { internalType: 'address[]', name: 'transmitters', type: 'address[]' },
        { internalType: 'uint8', name: 'f', type: 'uint8' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'query', type: 'address' }],
      name: 'getTransmitterInfo',
      outputs: [
        { internalType: 'bool', name: 'active', type: 'bool' },
        { internalType: 'uint8', name: 'index', type: 'uint8' },
        { internalType: 'uint96', name: 'balance', type: 'uint96' },
        { internalType: 'uint96', name: 'lastCollected', type: 'uint96' },
        { internalType: 'address', name: 'payee', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'upkeepId', type: 'uint256' }],
      name: 'getTriggerType',
      outputs: [
        {
          internalType: 'enum KeeperRegistryBase2_1.Trigger',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'getUpkeep',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'uint32', name: 'performGas', type: 'uint32' },
            { internalType: 'bytes', name: 'checkData', type: 'bytes' },
            { internalType: 'uint96', name: 'balance', type: 'uint96' },
            { internalType: 'address', name: 'admin', type: 'address' },
            {
              internalType: 'uint64',
              name: 'maxValidBlocknumber',
              type: 'uint64',
            },
            {
              internalType: 'uint32',
              name: 'lastPerformedBlockNumber',
              type: 'uint32',
            },
            { internalType: 'uint96', name: 'amountSpent', type: 'uint96' },
            { internalType: 'bool', name: 'paused', type: 'bool' },
            { internalType: 'bytes', name: 'offchainConfig', type: 'bytes' },
          ],
          internalType: 'struct KeeperRegistryBase2_1.UpkeepInfo',
          name: 'upkeepInfo',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'upkeepId', type: 'uint256' }],
      name: 'getUpkeepPrivilegeConfig',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'upkeepId', type: 'uint256' }],
      name: 'getUpkeepTriggerConfig',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: 'dedupKey', type: 'bytes32' }],
      name: 'hasDedupKey',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'pauseUpkeep',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'recoverFunds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'admin', type: 'address' },
        { internalType: 'bytes', name: 'newPrivilegeConfig', type: 'bytes' },
      ],
      name: 'setAdminPrivilegeConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address[]', name: 'payees', type: 'address[]' },
      ],
      name: 'setPayees',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'peer', type: 'address' },
        {
          internalType: 'enum KeeperRegistryBase2_1.MigrationPermission',
          name: 'permission',
          type: 'uint8',
        },
      ],
      name: 'setPeerRegistryMigrationPermission',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'bytes', name: 'newCheckData', type: 'bytes' },
      ],
      name: 'setUpkeepCheckData',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'uint32', name: 'gasLimit', type: 'uint32' },
      ],
      name: 'setUpkeepGasLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'bytes', name: 'config', type: 'bytes' },
      ],
      name: 'setUpkeepOffchainConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'upkeepId', type: 'uint256' },
        { internalType: 'bytes', name: 'newPrivilegeConfig', type: 'bytes' },
      ],
      name: 'setUpkeepPrivilegeConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'transmitter', type: 'address' },
        { internalType: 'address', name: 'proposed', type: 'address' },
      ],
      name: 'transferPayeeship',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'address', name: 'proposed', type: 'address' },
      ],
      name: 'transferUpkeepAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unpause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
      name: 'unpauseUpkeep',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'upkeepTranscoderVersion',
      outputs: [{ internalType: 'enum UpkeepFormat', name: '', type: 'uint8' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'upkeepVersion',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'withdrawFunds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdrawOwnerFunds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'withdrawPayment',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const

export const EVM2EVMOnRampContractConfig: ContractConfig = {
  abi: [
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'linkToken', type: 'address' },
            { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
            {
              internalType: 'uint64',
              name: 'destChainSelector',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'defaultTxGasLimit',
              type: 'uint64',
            },
            { internalType: 'uint96', name: 'maxNopFeesJuels', type: 'uint96' },
            { internalType: 'address', name: 'prevOnRamp', type: 'address' },
            { internalType: 'address', name: 'armProxy', type: 'address' },
          ],
          internalType: 'struct EVM2EVMOnRamp.StaticConfig',
          name: 'staticConfig',
          type: 'tuple',
        },
        {
          components: [
            { internalType: 'address', name: 'router', type: 'address' },
            {
              internalType: 'uint16',
              name: 'maxNumberOfTokensPerMsg',
              type: 'uint16',
            },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint16',
              name: 'destGasPerPayloadByte',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'destDataAvailabilityOverheadGas',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'destGasPerDataAvailabilityByte',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'destDataAvailabilityMultiplierBps',
              type: 'uint16',
            },
            { internalType: 'address', name: 'priceRegistry', type: 'address' },
            { internalType: 'uint32', name: 'maxDataBytes', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'maxPerMsgGasLimit',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.DynamicConfig',
          name: 'dynamicConfig',
          type: 'tuple',
        },
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'address', name: 'pool', type: 'address' },
          ],
          internalType: 'struct Internal.PoolUpdate[]',
          name: 'tokensAndPools',
          type: 'tuple[]',
        },
        {
          components: [
            { internalType: 'bool', name: 'isEnabled', type: 'bool' },
            { internalType: 'uint128', name: 'capacity', type: 'uint128' },
            { internalType: 'uint128', name: 'rate', type: 'uint128' },
          ],
          internalType: 'struct RateLimiter.Config',
          name: 'rateLimiterConfig',
          type: 'tuple',
        },
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            {
              internalType: 'uint32',
              name: 'networkFeeUSDCents',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'gasMultiplierWeiPerEth',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'premiumMultiplierWeiPerEth',
              type: 'uint64',
            },
            { internalType: 'bool', name: 'enabled', type: 'bool' },
          ],
          internalType: 'struct EVM2EVMOnRamp.FeeTokenConfigArgs[]',
          name: 'feeTokenConfigs',
          type: 'tuple[]',
        },
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'uint32', name: 'minFeeUSDCents', type: 'uint32' },
            { internalType: 'uint32', name: 'maxFeeUSDCents', type: 'uint32' },
            { internalType: 'uint16', name: 'deciBps', type: 'uint16' },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'destBytesOverhead',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.TokenTransferFeeConfigArgs[]',
          name: 'tokenTransferFeeConfigArgs',
          type: 'tuple[]',
        },
        {
          components: [
            { internalType: 'address', name: 'nop', type: 'address' },
            { internalType: 'uint16', name: 'weight', type: 'uint16' },
          ],
          internalType: 'struct EVM2EVMOnRamp.NopAndWeight[]',
          name: 'nopsAndWeights',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'capacity', type: 'uint256' },
        { internalType: 'uint256', name: 'requested', type: 'uint256' },
      ],
      name: 'AggregateValueMaxCapacityExceeded',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'minWaitInSeconds', type: 'uint256' },
        { internalType: 'uint256', name: 'available', type: 'uint256' },
      ],
      name: 'AggregateValueRateLimitReached',
      type: 'error',
    },
    { inputs: [], name: 'BadARMSignal', type: 'error' },
    { inputs: [], name: 'BucketOverfilled', type: 'error' },
    { inputs: [], name: 'CannotSendZeroTokens', type: 'error' },
    { inputs: [], name: 'InsufficientBalance', type: 'error' },
    {
      inputs: [
        { internalType: 'bytes', name: 'encodedAddress', type: 'bytes' },
      ],
      name: 'InvalidAddress',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
      ],
      name: 'InvalidChainSelector',
      type: 'error',
    },
    { inputs: [], name: 'InvalidConfig', type: 'error' },
    { inputs: [], name: 'InvalidExtraArgsTag', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'nop', type: 'address' }],
      name: 'InvalidNopAddress',
      type: 'error',
    },
    { inputs: [], name: 'InvalidTokenPoolConfig', type: 'error' },
    { inputs: [], name: 'InvalidWithdrawParams', type: 'error' },
    { inputs: [], name: 'LinkBalanceNotSettled', type: 'error' },
    { inputs: [], name: 'MaxFeeBalanceReached', type: 'error' },
    { inputs: [], name: 'MessageGasLimitTooHigh', type: 'error' },
    {
      inputs: [
        { internalType: 'uint256', name: 'maxSize', type: 'uint256' },
        { internalType: 'uint256', name: 'actualSize', type: 'uint256' },
      ],
      name: 'MessageTooLarge',
      type: 'error',
    },
    { inputs: [], name: 'MustBeCalledByRouter', type: 'error' },
    { inputs: [], name: 'NoFeesToPay', type: 'error' },
    { inputs: [], name: 'NoNopsToPay', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'NotAFeeToken',
      type: 'error',
    },
    { inputs: [], name: 'OnlyCallableByAdminOrOwner', type: 'error' },
    { inputs: [], name: 'OnlyCallableByOwnerOrAdmin', type: 'error' },
    { inputs: [], name: 'OnlyCallableByOwnerOrAdminOrNop', type: 'error' },
    { inputs: [], name: 'PoolAlreadyAdded', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'PoolDoesNotExist',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'PriceNotFoundForToken',
      type: 'error',
    },
    { inputs: [], name: 'RouterMustSetOriginalSender', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'SourceTokenDataTooLarge',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'capacity', type: 'uint256' },
        { internalType: 'uint256', name: 'requested', type: 'uint256' },
        { internalType: 'address', name: 'tokenAddress', type: 'address' },
      ],
      name: 'TokenMaxCapacityExceeded',
      type: 'error',
    },
    { inputs: [], name: 'TokenPoolMismatch', type: 'error' },
    {
      inputs: [
        { internalType: 'uint256', name: 'minWaitInSeconds', type: 'uint256' },
        { internalType: 'uint256', name: 'available', type: 'uint256' },
        { internalType: 'address', name: 'tokenAddress', type: 'address' },
      ],
      name: 'TokenRateLimitReached',
      type: 'error',
    },
    { inputs: [], name: 'TooManyNops', type: 'error' },
    { inputs: [], name: 'UnsupportedNumberOfTokens', type: 'error' },
    {
      inputs: [
        { internalType: 'contract IERC20', name: 'token', type: 'address' },
      ],
      name: 'UnsupportedToken',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'uint64',
              name: 'sourceChainSelector',
              type: 'uint64',
            },
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'address', name: 'receiver', type: 'address' },
            { internalType: 'uint64', name: 'sequenceNumber', type: 'uint64' },
            { internalType: 'uint256', name: 'gasLimit', type: 'uint256' },
            { internalType: 'bool', name: 'strict', type: 'bool' },
            { internalType: 'uint64', name: 'nonce', type: 'uint64' },
            { internalType: 'address', name: 'feeToken', type: 'address' },
            {
              internalType: 'uint256',
              name: 'feeTokenAmount',
              type: 'uint256',
            },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'tokenAmounts',
              type: 'tuple[]',
            },
            {
              internalType: 'bytes[]',
              name: 'sourceTokenData',
              type: 'bytes[]',
            },
            { internalType: 'bytes32', name: 'messageId', type: 'bytes32' },
          ],
          indexed: false,
          internalType: 'struct Internal.EVM2EVMMessage',
          name: 'message',
          type: 'tuple',
        },
      ],
      name: 'CCIPSendRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'linkToken', type: 'address' },
            { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
            {
              internalType: 'uint64',
              name: 'destChainSelector',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'defaultTxGasLimit',
              type: 'uint64',
            },
            { internalType: 'uint96', name: 'maxNopFeesJuels', type: 'uint96' },
            { internalType: 'address', name: 'prevOnRamp', type: 'address' },
            { internalType: 'address', name: 'armProxy', type: 'address' },
          ],
          indexed: false,
          internalType: 'struct EVM2EVMOnRamp.StaticConfig',
          name: 'staticConfig',
          type: 'tuple',
        },
        {
          components: [
            { internalType: 'address', name: 'router', type: 'address' },
            {
              internalType: 'uint16',
              name: 'maxNumberOfTokensPerMsg',
              type: 'uint16',
            },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint16',
              name: 'destGasPerPayloadByte',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'destDataAvailabilityOverheadGas',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'destGasPerDataAvailabilityByte',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'destDataAvailabilityMultiplierBps',
              type: 'uint16',
            },
            { internalType: 'address', name: 'priceRegistry', type: 'address' },
            { internalType: 'uint32', name: 'maxDataBytes', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'maxPerMsgGasLimit',
              type: 'uint32',
            },
          ],
          indexed: false,
          internalType: 'struct EVM2EVMOnRamp.DynamicConfig',
          name: 'dynamicConfig',
          type: 'tuple',
        },
      ],
      name: 'ConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            {
              internalType: 'uint32',
              name: 'networkFeeUSDCents',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'gasMultiplierWeiPerEth',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'premiumMultiplierWeiPerEth',
              type: 'uint64',
            },
            { internalType: 'bool', name: 'enabled', type: 'bool' },
          ],
          indexed: false,
          internalType: 'struct EVM2EVMOnRamp.FeeTokenConfigArgs[]',
          name: 'feeConfig',
          type: 'tuple[]',
        },
      ],
      name: 'FeeConfigSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'nop',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'NopPaid',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'nopWeightsTotal',
          type: 'uint256',
        },
        {
          components: [
            { internalType: 'address', name: 'nop', type: 'address' },
            { internalType: 'uint16', name: 'weight', type: 'uint16' },
          ],
          indexed: false,
          internalType: 'struct EVM2EVMOnRamp.NopAndWeight[]',
          name: 'nopsAndWeights',
          type: 'tuple[]',
        },
      ],
      name: 'NopsSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      name: 'PoolAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'pool',
          type: 'address',
        },
      ],
      name: 'PoolRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'uint32', name: 'minFeeUSDCents', type: 'uint32' },
            { internalType: 'uint32', name: 'maxFeeUSDCents', type: 'uint32' },
            { internalType: 'uint16', name: 'deciBps', type: 'uint16' },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'destBytesOverhead',
              type: 'uint32',
            },
          ],
          indexed: false,
          internalType: 'struct EVM2EVMOnRamp.TokenTransferFeeConfigArgs[]',
          name: 'transferFeeConfig',
          type: 'tuple[]',
        },
      ],
      name: 'TokenTransferFeeConfigSet',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'address', name: 'pool', type: 'address' },
          ],
          internalType: 'struct Internal.PoolUpdate[]',
          name: 'removes',
          type: 'tuple[]',
        },
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'address', name: 'pool', type: 'address' },
          ],
          internalType: 'struct Internal.PoolUpdate[]',
          name: 'adds',
          type: 'tuple[]',
        },
      ],
      name: 'applyPoolUpdates',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'currentRateLimiterState',
      outputs: [
        {
          components: [
            { internalType: 'uint128', name: 'tokens', type: 'uint128' },
            { internalType: 'uint32', name: 'lastUpdated', type: 'uint32' },
            { internalType: 'bool', name: 'isEnabled', type: 'bool' },
            { internalType: 'uint128', name: 'capacity', type: 'uint128' },
            { internalType: 'uint128', name: 'rate', type: 'uint128' },
          ],
          internalType: 'struct RateLimiter.TokenBucket',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'destChainSelector', type: 'uint64' },
        {
          components: [
            { internalType: 'bytes', name: 'receiver', type: 'bytes' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'tokenAmounts',
              type: 'tuple[]',
            },
            { internalType: 'address', name: 'feeToken', type: 'address' },
            { internalType: 'bytes', name: 'extraArgs', type: 'bytes' },
          ],
          internalType: 'struct Client.EVM2AnyMessage',
          name: 'message',
          type: 'tuple',
        },
        { internalType: 'uint256', name: 'feeTokenAmount', type: 'uint256' },
        { internalType: 'address', name: 'originalSender', type: 'address' },
      ],
      name: 'forwardFromRouter',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getDynamicConfig',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'router', type: 'address' },
            {
              internalType: 'uint16',
              name: 'maxNumberOfTokensPerMsg',
              type: 'uint16',
            },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint16',
              name: 'destGasPerPayloadByte',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'destDataAvailabilityOverheadGas',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'destGasPerDataAvailabilityByte',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'destDataAvailabilityMultiplierBps',
              type: 'uint16',
            },
            { internalType: 'address', name: 'priceRegistry', type: 'address' },
            { internalType: 'uint32', name: 'maxDataBytes', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'maxPerMsgGasLimit',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.DynamicConfig',
          name: 'dynamicConfig',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getExpectedNextSequenceNumber',
      outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'destChainSelector', type: 'uint64' },
        {
          components: [
            { internalType: 'bytes', name: 'receiver', type: 'bytes' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'tokenAmounts',
              type: 'tuple[]',
            },
            { internalType: 'address', name: 'feeToken', type: 'address' },
            { internalType: 'bytes', name: 'extraArgs', type: 'bytes' },
          ],
          internalType: 'struct Client.EVM2AnyMessage',
          name: 'message',
          type: 'tuple',
        },
      ],
      name: 'getFee',
      outputs: [
        { internalType: 'uint256', name: 'feeTokenAmount', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'getFeeTokenConfig',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'networkFeeUSDCents',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'gasMultiplierWeiPerEth',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'premiumMultiplierWeiPerEth',
              type: 'uint64',
            },
            { internalType: 'bool', name: 'enabled', type: 'bool' },
          ],
          internalType: 'struct EVM2EVMOnRamp.FeeTokenConfig',
          name: 'feeTokenConfig',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getNopFeesJuels',
      outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getNops',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'nop', type: 'address' },
            { internalType: 'uint16', name: 'weight', type: 'uint16' },
          ],
          internalType: 'struct EVM2EVMOnRamp.NopAndWeight[]',
          name: 'nopsAndWeights',
          type: 'tuple[]',
        },
        { internalType: 'uint256', name: 'weightsTotal', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: '', type: 'uint64' },
        {
          internalType: 'contract IERC20',
          name: 'sourceToken',
          type: 'address',
        },
      ],
      name: 'getPoolBySourceToken',
      outputs: [{ internalType: 'contract IPool', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
      name: 'getSenderNonce',
      outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getStaticConfig',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'linkToken', type: 'address' },
            { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
            {
              internalType: 'uint64',
              name: 'destChainSelector',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'defaultTxGasLimit',
              type: 'uint64',
            },
            { internalType: 'uint96', name: 'maxNopFeesJuels', type: 'uint96' },
            { internalType: 'address', name: 'prevOnRamp', type: 'address' },
            { internalType: 'address', name: 'armProxy', type: 'address' },
          ],
          internalType: 'struct EVM2EVMOnRamp.StaticConfig',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
      name: 'getSupportedTokens',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTokenLimitAdmin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
      name: 'getTokenTransferFeeConfig',
      outputs: [
        {
          components: [
            { internalType: 'uint32', name: 'minFeeUSDCents', type: 'uint32' },
            { internalType: 'uint32', name: 'maxFeeUSDCents', type: 'uint32' },
            { internalType: 'uint16', name: 'deciBps', type: 'uint16' },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'destBytesOverhead',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.TokenTransferFeeConfig',
          name: 'tokenTransferFeeConfig',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'linkAvailableForPayment',
      outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'payNops',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newAdmin', type: 'address' }],
      name: 'setAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'router', type: 'address' },
            {
              internalType: 'uint16',
              name: 'maxNumberOfTokensPerMsg',
              type: 'uint16',
            },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint16',
              name: 'destGasPerPayloadByte',
              type: 'uint16',
            },
            {
              internalType: 'uint32',
              name: 'destDataAvailabilityOverheadGas',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'destGasPerDataAvailabilityByte',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: 'destDataAvailabilityMultiplierBps',
              type: 'uint16',
            },
            { internalType: 'address', name: 'priceRegistry', type: 'address' },
            { internalType: 'uint32', name: 'maxDataBytes', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'maxPerMsgGasLimit',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.DynamicConfig',
          name: 'dynamicConfig',
          type: 'tuple',
        },
      ],
      name: 'setDynamicConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            {
              internalType: 'uint32',
              name: 'networkFeeUSDCents',
              type: 'uint32',
            },
            {
              internalType: 'uint64',
              name: 'gasMultiplierWeiPerEth',
              type: 'uint64',
            },
            {
              internalType: 'uint64',
              name: 'premiumMultiplierWeiPerEth',
              type: 'uint64',
            },
            { internalType: 'bool', name: 'enabled', type: 'bool' },
          ],
          internalType: 'struct EVM2EVMOnRamp.FeeTokenConfigArgs[]',
          name: 'feeTokenConfigArgs',
          type: 'tuple[]',
        },
      ],
      name: 'setFeeTokenConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'nop', type: 'address' },
            { internalType: 'uint16', name: 'weight', type: 'uint16' },
          ],
          internalType: 'struct EVM2EVMOnRamp.NopAndWeight[]',
          name: 'nopsAndWeights',
          type: 'tuple[]',
        },
      ],
      name: 'setNops',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'bool', name: 'isEnabled', type: 'bool' },
            { internalType: 'uint128', name: 'capacity', type: 'uint128' },
            { internalType: 'uint128', name: 'rate', type: 'uint128' },
          ],
          internalType: 'struct RateLimiter.Config',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'setRateLimiterConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'address', name: 'token', type: 'address' },
            { internalType: 'uint32', name: 'minFeeUSDCents', type: 'uint32' },
            { internalType: 'uint32', name: 'maxFeeUSDCents', type: 'uint32' },
            { internalType: 'uint16', name: 'deciBps', type: 'uint16' },
            { internalType: 'uint32', name: 'destGasOverhead', type: 'uint32' },
            {
              internalType: 'uint32',
              name: 'destBytesOverhead',
              type: 'uint32',
            },
          ],
          internalType: 'struct EVM2EVMOnRamp.TokenTransferFeeConfigArgs[]',
          name: 'tokenTransferFeeConfigArgs',
          type: 'tuple[]',
        },
      ],
      name: 'setTokenTransferFeeConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'typeAndVersion',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'feeToken', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'withdrawNonLinkFees',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const

export const CCIPRouterContractConfig: ContractConfig = {
  abi: [
    {
      inputs: [
        { internalType: 'address', name: 'wrappedNative', type: 'address' },
        { internalType: 'address', name: 'armProxy', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [], name: 'BadARMSignal', type: 'error' },
    { inputs: [], name: 'FailedToSendValue', type: 'error' },
    { inputs: [], name: 'InsufficientFeeTokenAmount', type: 'error' },
    { inputs: [], name: 'InvalidMsgValue', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
      name: 'InvalidRecipientAddress',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
        { internalType: 'address', name: 'offRamp', type: 'address' },
      ],
      name: 'OffRampMismatch',
      type: 'error',
    },
    { inputs: [], name: 'OnlyOffRamp', type: 'error' },
    {
      inputs: [
        { internalType: 'uint64', name: 'destChainSelector', type: 'uint64' },
      ],
      name: 'UnsupportedDestinationChain',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'messageId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'sourceChainSelector',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'offRamp',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'calldataHash',
          type: 'bytes32',
        },
      ],
      name: 'MessageExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'sourceChainSelector',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'offRamp',
          type: 'address',
        },
      ],
      name: 'OffRampAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'sourceChainSelector',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'offRamp',
          type: 'address',
        },
      ],
      name: 'OffRampRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint64',
          name: 'destChainSelector',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'onRamp',
          type: 'address',
        },
      ],
      name: 'OnRampSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MAX_RET_BYTES',
      outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint64',
              name: 'destChainSelector',
              type: 'uint64',
            },
            { internalType: 'address', name: 'onRamp', type: 'address' },
          ],
          internalType: 'struct Router.OnRamp[]',
          name: 'onRampUpdates',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'uint64',
              name: 'sourceChainSelector',
              type: 'uint64',
            },
            { internalType: 'address', name: 'offRamp', type: 'address' },
          ],
          internalType: 'struct Router.OffRamp[]',
          name: 'offRampRemoves',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'uint64',
              name: 'sourceChainSelector',
              type: 'uint64',
            },
            { internalType: 'address', name: 'offRamp', type: 'address' },
          ],
          internalType: 'struct Router.OffRamp[]',
          name: 'offRampAdds',
          type: 'tuple[]',
        },
      ],
      name: 'applyRampUpdates',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: 'destinationChainSelector',
          type: 'uint64',
        },
        {
          components: [
            { internalType: 'bytes', name: 'receiver', type: 'bytes' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'tokenAmounts',
              type: 'tuple[]',
            },
            { internalType: 'address', name: 'feeToken', type: 'address' },
            { internalType: 'bytes', name: 'extraArgs', type: 'bytes' },
          ],
          internalType: 'struct Client.EVM2AnyMessage',
          name: 'message',
          type: 'tuple',
        },
      ],
      name: 'ccipSend',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getArmProxy',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint64',
          name: 'destinationChainSelector',
          type: 'uint64',
        },
        {
          components: [
            { internalType: 'bytes', name: 'receiver', type: 'bytes' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'tokenAmounts',
              type: 'tuple[]',
            },
            { internalType: 'address', name: 'feeToken', type: 'address' },
            { internalType: 'bytes', name: 'extraArgs', type: 'bytes' },
          ],
          internalType: 'struct Client.EVM2AnyMessage',
          name: 'message',
          type: 'tuple',
        },
      ],
      name: 'getFee',
      outputs: [{ internalType: 'uint256', name: 'fee', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getOffRamps',
      outputs: [
        {
          components: [
            {
              internalType: 'uint64',
              name: 'sourceChainSelector',
              type: 'uint64',
            },
            { internalType: 'address', name: 'offRamp', type: 'address' },
          ],
          internalType: 'struct Router.OffRamp[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'destChainSelector', type: 'uint64' },
      ],
      name: 'getOnRamp',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
      ],
      name: 'getSupportedTokens',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getWrappedNative',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'chainSelector', type: 'uint64' },
      ],
      name: 'isChainSupported',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint64', name: 'sourceChainSelector', type: 'uint64' },
        { internalType: 'address', name: 'offRamp', type: 'address' },
      ],
      name: 'isOffRamp',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenAddress', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'recoverTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'bytes32', name: 'messageId', type: 'bytes32' },
            {
              internalType: 'uint64',
              name: 'sourceChainSelector',
              type: 'uint64',
            },
            { internalType: 'bytes', name: 'sender', type: 'bytes' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
            {
              components: [
                { internalType: 'address', name: 'token', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              internalType: 'struct Client.EVMTokenAmount[]',
              name: 'destTokenAmounts',
              type: 'tuple[]',
            },
          ],
          internalType: 'struct Client.Any2EVMMessage',
          name: 'message',
          type: 'tuple',
        },
        {
          internalType: 'uint16',
          name: 'gasForCallExactCheck',
          type: 'uint16',
        },
        { internalType: 'uint256', name: 'gasLimit', type: 'uint256' },
        { internalType: 'address', name: 'receiver', type: 'address' },
      ],
      name: 'routeMessage',
      outputs: [
        { internalType: 'bool', name: 'success', type: 'bool' },
        { internalType: 'bytes', name: 'retData', type: 'bytes' },
        { internalType: 'uint256', name: 'gasUsed', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'wrappedNative', type: 'address' },
      ],
      name: 'setWrappedNative',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'typeAndVersion',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
  ],
} as const

export const LinkTokenContractConfig: ContractConfig = {
  abi: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseApproval',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseApproval',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'transferAndCall',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'typeAndVersion',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
} as const
