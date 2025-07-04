import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'intArry',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DebugToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const debugTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PermitAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const errorsAbi = [
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'FailedDeployment' },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'MissingPrecompile',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const factoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMintCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMintCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount0Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Owed', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'sqrtPriceX96',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'liquidity',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getPosition',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sqrtPriceX96',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tick',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickLower',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickUpper',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPoolManager.CreateAndInitializeParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [
      {
        name: 'poolsInfo',
        internalType: 'struct IPoolManager.PoolInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'pool', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPairs',
    outputs: [
      {
        name: '',
        internalType: 'struct IPoolManager.Pair[]',
        type: 'tuple[]',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPositionManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'positionId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPositions',
    outputs: [
      {
        name: 'positionInfo',
        internalType: 'struct IPositionManager.PositionInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
          { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
          {
            name: 'feeGrowthInside0LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'feeGrowthInside1LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISwapCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSwapCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISwapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSwapRouterAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'zeroForOne',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountInRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWETH
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iwethAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'src', internalType: 'address', type: 'address' },
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_unlockTime', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'when',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlockTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MyToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const myTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferWithCallback',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MyTokenTwo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const myTokenTwoAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'quantity', internalType: 'uint256', type: 'uint256' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nonces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noncesAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'Collect',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'sqrtPriceX96',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'liquidity',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      { name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint128', type: 'uint128' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount0Requested', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1Requested', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint128', type: 'uint128' },
      { name: 'amount1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal0X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeGrowthGlobal1X128',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getPosition',
    outputs: [
      { name: '_liquidity', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sqrtPriceX96_', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidity',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'positions',
    outputs: [
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sqrtPriceX96',
    outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tick',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickLower',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickUpper',
    outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'index', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'tickLower',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      {
        name: 'tickUpper',
        internalType: 'int24',
        type: 'int24',
        indexed: false,
      },
      { name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
      {
        name: 'pool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPoolManager.CreateAndInitializeParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
        ],
      },
    ],
    name: 'createAndInitializePoolIfNecessary',
    outputs: [
      { name: 'poolAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    name: 'createPool',
    outputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPools',
    outputs: [
      {
        name: 'poolsInfo',
        internalType: 'struct IPoolManager.PoolInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'pool', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'feeProtocol', internalType: 'uint8', type: 'uint8' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tick', internalType: 'int24', type: 'int24' },
          { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPairs',
    outputs: [
      {
        name: '',
        internalType: 'struct IPoolManager.Pair[]',
        type: 'tuple[]',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getPool',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'pairs',
    outputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'factory', internalType: 'address', type: 'address' },
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pools',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PositionManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionManagerAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_poolManger', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'positionId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'collect',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllPositions',
    outputs: [
      {
        name: 'positionInfo',
        internalType: 'struct IPositionManager.PositionInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'fee', internalType: 'uint24', type: 'uint24' },
          { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
          { name: 'tickLower', internalType: 'int24', type: 'int24' },
          { name: 'tickUpper', internalType: 'int24', type: 'int24' },
          { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
          { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
          {
            name: 'feeGrowthInside0LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'feeGrowthInside1LastX128',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSender',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IPositionManager.MintParams',
        type: 'tuple',
        components: [
          { name: 'token0', internalType: 'address', type: 'address' },
          { name: 'token1', internalType: 'address', type: 'address' },
          { name: 'index', internalType: 'uint32', type: 'uint32' },
          { name: 'amount0Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'amount1Desired', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'mint',
    outputs: [
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolManager',
    outputs: [
      { name: '', internalType: 'contract IPoolManager', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'positions',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'fee', internalType: 'uint24', type: 'uint24' },
      { name: 'liquidity', internalType: 'uint128', type: 'uint128' },
      { name: 'tickLower', internalType: 'int24', type: 'int24' },
      { name: 'tickUpper', internalType: 'int24', type: 'int24' },
      { name: 'tokensOwed0', internalType: 'uint128', type: 'uint128' },
      { name: 'tokensOwed1', internalType: 'uint128', type: 'uint128' },
      {
        name: 'feeGrowthInside0LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'feeGrowthInside1LastX128',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShortStrings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const shortStringsAbi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SwapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const swapRouterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_poolManager', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'zeroForOne',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountInRemaining',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Swap',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'amountOutMinimum',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.ExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'exactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolManager',
    outputs: [
      { name: '', internalType: 'contract IPoolManager', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactInputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactInput',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ISwapRouter.QuoteExactOutputParams',
        type: 'tuple',
        components: [
          { name: 'tokenIn', internalType: 'address', type: 'address' },
          { name: 'tokenOut', internalType: 'address', type: 'address' },
          { name: 'indexPath', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
          {
            name: 'sqrtPriceLimitX96',
            internalType: 'uint160',
            type: 'uint160',
          },
        ],
      },
    ],
    name: 'quoteExactOutput',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Delta', internalType: 'int256', type: 'int256' },
      { name: 'amount1Delta', internalType: 'int256', type: 'int256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pool', internalType: 'contract IPool', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'zeroForOne', internalType: 'bool', type: 'bool' },
      { name: 'amountSpecified', internalType: 'int256', type: 'int256' },
      { name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swapInPool',
    outputs: [
      { name: 'amount0', internalType: 'int256', type: 'int256' },
      { name: 'amount1', internalType: 'int256', type: 'int256' },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickMathAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
    ],
    name: 'InvalidSqrtPrice',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
    name: 'InvalidTick',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenRecipient
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenRecipientAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokensReceived',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdtAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WETH9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const weth9Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'guy', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'src', internalType: 'address', type: 'address' },
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"intArry"`
 */
export const useReadCounterIntArry = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  functionName: 'intArry',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useWriteCounter = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useWriteCounterIncrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  functionName: 'increment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useWriteCounterSetNumber = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useSimulateCounter = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useSimulateCounterIncrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useSimulateCounterSetNumber =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useReadDebugToken = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadDebugTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadDebugTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadDebugTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadDebugTokenName = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadDebugTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: debugTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadDebugTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: debugTokenAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useWriteDebugToken = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteDebugTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteDebugTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteDebugTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: debugTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteDebugTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: debugTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useSimulateDebugToken = /*#__PURE__*/ createUseSimulateContract({
  abi: debugTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateDebugTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateDebugTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateDebugTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link debugTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateDebugTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: debugTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__
 */
export const useWatchDebugTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: debugTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchDebugTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link debugTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchDebugTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: debugTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const useReadEip712 = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadEip712Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const useWatchEip712Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: eip712Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchEip712Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useReadErc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadErc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20PermitAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20PermitBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20PermitDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadErc20PermitEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20PermitName = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20PermitSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20PermitTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWriteErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20PermitApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteErc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20PermitTransfer = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PermitAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20PermitTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useSimulateErc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20PermitApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateErc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20PermitTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20PermitTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWatchErc20PermitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20PermitAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20PermitApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchErc20PermitEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20PermitTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useReadFactory = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadFactoryGetPool = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadFactoryParameters = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"pools"`
 */
export const useReadFactoryPools = /*#__PURE__*/ createUseReadContract({
  abi: factoryAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useWriteFactory = /*#__PURE__*/ createUseWriteContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteFactoryCreatePool = /*#__PURE__*/ createUseWriteContract({
  abi: factoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryAbi}__
 */
export const useSimulateFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link factoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateFactoryCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: factoryAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryAbi}__
 */
export const useWatchFactoryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: factoryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link factoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: factoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useReadIerc5267 = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadIerc5267Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: ierc5267Abi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useWatchIerc5267Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc5267Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchIerc5267Eip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useReadIFactory = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadIFactoryGetPool = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadIFactoryParameters = /*#__PURE__*/ createUseReadContract({
  abi: iFactoryAbi,
  functionName: 'parameters',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useWriteIFactory = /*#__PURE__*/ createUseWriteContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteIFactoryCreatePool = /*#__PURE__*/ createUseWriteContract({
  abi: iFactoryAbi,
  functionName: 'createPool',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useSimulateIFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iFactoryAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateIFactoryCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iFactoryAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__
 */
export const useWatchIFactoryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iFactoryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iFactoryAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchIFactoryPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iFactoryAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const useWriteIMintCallback = /*#__PURE__*/ createUseWriteContract({
  abi: iMintCallbackAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWriteIMintCallbackMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintCallbackAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__
 */
export const useSimulateIMintCallback = /*#__PURE__*/ createUseSimulateContract(
  { abi: iMintCallbackAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintCallbackAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulateIMintCallbackMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintCallbackAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useReadIPool = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"factory"`
 */
export const useReadIPoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"fee"`
 */
export const useReadIPoolFee = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const useReadIPoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolAbi,
    functionName: 'feeGrowthGlobal0X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const useReadIPoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolAbi,
    functionName: 'feeGrowthGlobal1X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"getPosition"`
 */
export const useReadIPoolGetPosition = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"liquidity"`
 */
export const useReadIPoolLiquidity = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const useReadIPoolSqrtPriceX96 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tick"`
 */
export const useReadIPoolTick = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickLower"`
 */
export const useReadIPoolTickLower = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const useReadIPoolTickUpper = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token0"`
 */
export const useReadIPoolToken0 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"token1"`
 */
export const useReadIPoolToken1 = /*#__PURE__*/ createUseReadContract({
  abi: iPoolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useWriteIPool = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIPoolBurn = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteIPoolCollect = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIPoolInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIPoolMint = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const useWriteIPoolSwap = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useSimulateIPool = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIPoolBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateIPoolCollect = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIPoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIPoolMint = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulateIPoolSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__
 */
export const useWatchIPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iPoolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchIPoolBurnEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Burn' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Collect"`
 */
export const useWatchIPoolCollectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPoolAbi,
    eventName: 'Collect',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchIPoolMintEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Mint' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchIPoolSwapEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iPoolAbi, eventName: 'Swap' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useReadIPoolManager = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const useReadIPoolManagerGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolManagerAbi,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const useReadIPoolManagerGetPairs = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadIPoolManagerGetPool = /*#__PURE__*/ createUseReadContract({
  abi: iPoolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadIPoolManagerParameters =
  /*#__PURE__*/ createUseReadContract({
    abi: iPoolManagerAbi,
    functionName: 'parameters',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useWriteIPoolManager = /*#__PURE__*/ createUseWriteContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useWriteIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteIPoolManagerCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPoolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useSimulateIPoolManager = /*#__PURE__*/ createUseSimulateContract({
  abi: iPoolManagerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useSimulateIPoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPoolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateIPoolManagerCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPoolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__
 */
export const useWatchIPoolManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iPoolManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPoolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchIPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPoolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useReadIPositionManager = /*#__PURE__*/ createUseReadContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIPositionManagerBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const useReadIPositionManagerGetAllPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIPositionManagerGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIPositionManagerOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIPositionManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iPositionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useWriteIPositionManager = /*#__PURE__*/ createUseWriteContract({
  abi: iPositionManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIPositionManagerApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIPositionManagerBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useWriteIPositionManagerCollect =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIPositionManagerMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWriteIPositionManagerMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIPositionManagerTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useSimulateIPositionManager =
  /*#__PURE__*/ createUseSimulateContract({ abi: iPositionManagerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIPositionManagerApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIPositionManagerBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulateIPositionManagerCollect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIPositionManagerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulateIPositionManagerMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIPositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIPositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iPositionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIPositionManagerTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iPositionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__
 */
export const useWatchIPositionManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iPositionManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIPositionManagerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iPositionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIPositionManagerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iPositionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const useWriteISwapCallback = /*#__PURE__*/ createUseWriteContract({
  abi: iSwapCallbackAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteISwapCallbackSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapCallbackAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__
 */
export const useSimulateISwapCallback = /*#__PURE__*/ createUseSimulateContract(
  { abi: iSwapCallbackAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapCallbackAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateISwapCallbackSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapCallbackAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useWriteISwapRouter = /*#__PURE__*/ createUseWriteContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useWriteISwapRouterExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useWriteISwapRouterExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useWriteISwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useWriteISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteISwapRouterSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSwapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useSimulateISwapRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: iSwapRouterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useSimulateISwapRouterExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useSimulateISwapRouterExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useSimulateISwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useSimulateISwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSwapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateISwapRouterSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSwapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__
 */
export const useWatchISwapRouterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iSwapRouterAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSwapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchISwapRouterSwapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iSwapRouterAbi,
    eventName: 'Swap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwethAbi}__
 */
export const useWriteIweth = /*#__PURE__*/ createUseWriteContract({
  abi: iwethAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteIwethDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: iwethAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIwethTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: iwethAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIwethTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: iwethAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteIwethWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: iwethAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwethAbi}__
 */
export const useSimulateIweth = /*#__PURE__*/ createUseSimulateContract({
  abi: iwethAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateIwethDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: iwethAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIwethTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: iwethAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIwethTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iwethAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwethAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateIwethWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: iwethAbi, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useReadLock = /*#__PURE__*/ createUseReadContract({ abi: lockAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLockOwner = /*#__PURE__*/ createUseReadContract({
  abi: lockAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"unlockTime"`
 */
export const useReadLockUnlockTime = /*#__PURE__*/ createUseReadContract({
  abi: lockAbi,
  functionName: 'unlockTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useWriteLock = /*#__PURE__*/ createUseWriteContract({
  abi: lockAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteLockWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__
 */
export const useSimulateLock = /*#__PURE__*/ createUseSimulateContract({
  abi: lockAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateLockWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__
 */
export const useWatchLockEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: lockAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchLockWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockAbi,
    eventName: 'Withdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__
 */
export const useReadMyToken = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadMyTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: myTokenAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadMyTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMyTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadMyTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadMyTokenEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadMyTokenName = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadMyTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadMyTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadMyTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: myTokenAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__
 */
export const useWriteMyToken = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteMyTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteMyTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteMyTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteMyTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMyTokenTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: myTokenAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transferWithCallback"`
 */
export const useWriteMyTokenTransferWithCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenAbi,
    functionName: 'transferWithCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__
 */
export const useSimulateMyToken = /*#__PURE__*/ createUseSimulateContract({
  abi: myTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMyTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateMyTokenMint = /*#__PURE__*/ createUseSimulateContract({
  abi: myTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateMyTokenPermit = /*#__PURE__*/ createUseSimulateContract(
  { abi: myTokenAbi, functionName: 'permit' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateMyTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMyTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenAbi}__ and `functionName` set to `"transferWithCallback"`
 */
export const useSimulateMyTokenTransferWithCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenAbi,
    functionName: 'transferWithCallback',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenAbi}__
 */
export const useWatchMyTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: myTokenAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMyTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchMyTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMyTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__
 */
export const useReadMyTokenTwo = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMyTokenTwoBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadMyTokenTwoGetApproved = /*#__PURE__*/ createUseReadContract(
  { abi: myTokenTwoAbi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadMyTokenTwoIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: myTokenTwoAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"name"`
 */
export const useReadMyTokenTwoName = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"owner"`
 */
export const useReadMyTokenTwoOwner = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadMyTokenTwoOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMyTokenTwoSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: myTokenTwoAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadMyTokenTwoSymbol = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadMyTokenTwoTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: myTokenTwoAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__
 */
export const useWriteMyTokenTwo = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenTwoAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteMyTokenTwoApprove = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenTwoAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteMyTokenTwoMint = /*#__PURE__*/ createUseWriteContract({
  abi: myTokenTwoAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteMyTokenTwoRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenTwoAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteMyTokenTwoSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenTwoAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteMyTokenTwoSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenTwoAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMyTokenTwoTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenTwoAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteMyTokenTwoTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: myTokenTwoAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__
 */
export const useSimulateMyTokenTwo = /*#__PURE__*/ createUseSimulateContract({
  abi: myTokenTwoAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMyTokenTwoApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateMyTokenTwoMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateMyTokenTwoRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateMyTokenTwoSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateMyTokenTwoSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMyTokenTwoTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link myTokenTwoAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateMyTokenTwoTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: myTokenTwoAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenTwoAbi}__
 */
export const useWatchMyTokenTwoEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: myTokenTwoAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenTwoAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMyTokenTwoApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenTwoAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenTwoAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchMyTokenTwoApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenTwoAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenTwoAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchMyTokenTwoOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenTwoAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link myTokenTwoAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMyTokenTwoTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: myTokenTwoAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__
 */
export const useReadNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link noncesAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadNoncesNonces = /*#__PURE__*/ createUseReadContract({
  abi: noncesAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useReadPool = /*#__PURE__*/ createUseReadContract({ abi: poolAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"factory"`
 */
export const useReadPoolFactory = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"fee"`
 */
export const useReadPoolFee = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const useReadPoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'feeGrowthGlobal0X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const useReadPoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createUseReadContract({
    abi: poolAbi,
    functionName: 'feeGrowthGlobal1X128',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"getPosition"`
 */
export const useReadPoolGetPosition = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'getPosition',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"liquidity"`
 */
export const useReadPoolLiquidity = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'liquidity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"positions"`
 */
export const useReadPoolPositions = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'positions',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"sqrtPriceX96"`
 */
export const useReadPoolSqrtPriceX96 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'sqrtPriceX96',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tick"`
 */
export const useReadPoolTick = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickLower"`
 */
export const useReadPoolTickLower = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tickLower',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"tickUpper"`
 */
export const useReadPoolTickUpper = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'tickUpper',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token0"`
 */
export const useReadPoolToken0 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"token1"`
 */
export const useReadPoolToken1 = /*#__PURE__*/ createUseReadContract({
  abi: poolAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useWritePool = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePoolBurn = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const useWritePoolCollect = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePoolInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePoolMint = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const useWritePoolSwap = /*#__PURE__*/ createUseWriteContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__
 */
export const useSimulatePool = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePoolBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulatePoolCollect = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'collect',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePoolInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePoolMint = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulatePoolSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: poolAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__
 */
export const useWatchPoolEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchPoolBurnEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Collect"`
 */
export const useWatchPoolCollectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolAbi,
    eventName: 'Collect',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchPoolMintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchPoolSwapEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: poolAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useReadPoolManager = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getAllPools"`
 */
export const useReadPoolManagerGetAllPools =
  /*#__PURE__*/ createUseReadContract({
    abi: poolManagerAbi,
    functionName: 'getAllPools',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPairs"`
 */
export const useReadPoolManagerGetPairs = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'getPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"getPool"`
 */
export const useReadPoolManagerGetPool = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pairs"`
 */
export const useReadPoolManagerPairs = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'pairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"parameters"`
 */
export const useReadPoolManagerParameters = /*#__PURE__*/ createUseReadContract(
  { abi: poolManagerAbi, functionName: 'parameters' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"pools"`
 */
export const useReadPoolManagerPools = /*#__PURE__*/ createUseReadContract({
  abi: poolManagerAbi,
  functionName: 'pools',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useWritePoolManager = /*#__PURE__*/ createUseWriteContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useWritePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useWritePoolManagerCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: poolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useSimulatePoolManager = /*#__PURE__*/ createUseSimulateContract({
  abi: poolManagerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createAndInitializePoolIfNecessary"`
 */
export const useSimulatePoolManagerCreateAndInitializePoolIfNecessary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createAndInitializePoolIfNecessary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link poolManagerAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulatePoolManagerCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: poolManagerAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__
 */
export const useWatchPoolManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: poolManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link poolManagerAbi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchPoolManagerPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: poolManagerAbi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useReadPositionManager = /*#__PURE__*/ createUseReadContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPositionManagerBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getAllPositions"`
 */
export const useReadPositionManagerGetAllPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getAllPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPositionManagerGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"getSender"`
 */
export const useReadPositionManagerGetSender =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'getSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPositionManagerIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"name"`
 */
export const useReadPositionManagerName = /*#__PURE__*/ createUseReadContract({
  abi: positionManagerAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPositionManagerOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"poolManager"`
 */
export const useReadPositionManagerPoolManager =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'poolManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"positions"`
 */
export const useReadPositionManagerPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'positions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPositionManagerSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPositionManagerSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: positionManagerAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPositionManagerTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: positionManagerAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useWritePositionManager = /*#__PURE__*/ createUseWriteContract({
  abi: positionManagerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePositionManagerApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePositionManagerBurn = /*#__PURE__*/ createUseWriteContract(
  { abi: positionManagerAbi, functionName: 'burn' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useWritePositionManagerCollect =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePositionManagerMint = /*#__PURE__*/ createUseWriteContract(
  { abi: positionManagerAbi, functionName: 'mint' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useWritePositionManagerMintCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePositionManagerTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useSimulatePositionManager =
  /*#__PURE__*/ createUseSimulateContract({ abi: positionManagerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePositionManagerApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePositionManagerBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"collect"`
 */
export const useSimulatePositionManagerCollect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePositionManagerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"mintCallback"`
 */
export const useSimulatePositionManagerMintCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'mintCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePositionManagerSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePositionManagerSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link positionManagerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePositionManagerTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: positionManagerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__
 */
export const useWatchPositionManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: positionManagerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPositionManagerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPositionManagerApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link positionManagerAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPositionManagerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: positionManagerAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useReadSwapRouter = /*#__PURE__*/ createUseReadContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"poolManager"`
 */
export const useReadSwapRouterPoolManager = /*#__PURE__*/ createUseReadContract(
  { abi: swapRouterAbi, functionName: 'poolManager' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useWriteSwapRouter = /*#__PURE__*/ createUseWriteContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useWriteSwapRouterExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useWriteSwapRouterExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useWriteSwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useWriteSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useWriteSwapRouterSwapCallback =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const useWriteSwapRouterSwapInPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: swapRouterAbi,
    functionName: 'swapInPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useSimulateSwapRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: swapRouterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactInput"`
 */
export const useSimulateSwapRouterExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"exactOutput"`
 */
export const useSimulateSwapRouterExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'exactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactInput"`
 */
export const useSimulateSwapRouterQuoteExactInput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactInput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"quoteExactOutput"`
 */
export const useSimulateSwapRouterQuoteExactOutput =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'quoteExactOutput',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapCallback"`
 */
export const useSimulateSwapRouterSwapCallback =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapCallback',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link swapRouterAbi}__ and `functionName` set to `"swapInPool"`
 */
export const useSimulateSwapRouterSwapInPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: swapRouterAbi,
    functionName: 'swapInPool',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__
 */
export const useWatchSwapRouterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: swapRouterAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link swapRouterAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchSwapRouterSwapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: swapRouterAbi,
    eventName: 'Swap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenRecipientAbi}__
 */
export const useWriteTokenRecipient = /*#__PURE__*/ createUseWriteContract({
  abi: tokenRecipientAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenRecipientAbi}__ and `functionName` set to `"tokensReceived"`
 */
export const useWriteTokenRecipientTokensReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenRecipientAbi,
    functionName: 'tokensReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenRecipientAbi}__
 */
export const useSimulateTokenRecipient =
  /*#__PURE__*/ createUseSimulateContract({ abi: tokenRecipientAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenRecipientAbi}__ and `functionName` set to `"tokensReceived"`
 */
export const useSimulateTokenRecipientTokensReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenRecipientAbi,
    functionName: 'tokensReceived',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__
 */
export const useReadUsdt = /*#__PURE__*/ createUseReadContract({ abi: usdtAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadUsdtAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUsdtBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadUsdtDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"name"`
 */
export const useReadUsdtName = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUsdtSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUsdtTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__
 */
export const useWriteUsdt = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUsdtApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteUsdtMint = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUsdtTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUsdtTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__
 */
export const useSimulateUsdt = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUsdtApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateUsdtMint = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateUsdtTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUsdtTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdtAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdtAbi}__
 */
export const useWatchUsdtEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdtAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdtAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUsdtApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdtAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdtAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUsdtTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdtAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__
 */
export const useReadWeth9 = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadWeth9Allowance = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadWeth9BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadWeth9Decimals = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"name"`
 */
export const useReadWeth9Name = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadWeth9Symbol = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadWeth9TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__
 */
export const useWriteWeth9 = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteWeth9Approve = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"deposit"`
 */
export const useWriteWeth9Deposit = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteWeth9Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteWeth9TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteWeth9Withdraw = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__
 */
export const useSimulateWeth9 = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateWeth9Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateWeth9Deposit = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateWeth9Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: weth9Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateWeth9TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: weth9Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateWeth9Withdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: weth9Abi, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__
 */
export const useWatchWeth9Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: weth9Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchWeth9ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchWeth9DepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchWeth9TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchWeth9WithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    eventName: 'Withdrawal',
  })
