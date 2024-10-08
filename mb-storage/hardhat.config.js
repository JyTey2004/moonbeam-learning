/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition-ethers');

// Devnet private keys
const dev_private_keys = [
  '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133',
  '0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b',
  '0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b',
  '0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68',
  '0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4',
  '0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df',
  '0x96b8a38e12e1a31dee1eab2fffdf9d9990045f5b37e44d8cc27766ef294acf18',
  '0x0d6dcaaef49272a5411896be8ad16c01c35d6f8c18873387b71fbc734759b0ab',
  '0x4c42532034540267bf568198ccec4cb822a025da542861fcb146a5fab6433ff8',
  '0x94c49300a58d576011096bcb006aa06f5a91b34b4383891e8029c21dc39fbb8b'
]

// Moonbase private keys
const private_keys = [
  '5a13181e01de608defdd048f3ba3a92f30ada2b48661ffdb2e94bbee003e5d45'
];

module.exports = {
  solidity: '0.8.20',
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network', // Insert your RPC URL here
      chainId: 1287, // (hex: 0x507),
      accounts: private_keys,
    },
    dev: {
      url: 'http://127.0.0.1:9944', // Insert your RPC URL here
      chainId: 1281, // (hex: 0x501),
      accounts: dev_private_keys,
    },
  },
};