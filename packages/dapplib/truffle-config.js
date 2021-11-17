require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot eight release night hospital coral light army giggle'; 
let testAccounts = [
"0xfa37170493e9304502338e06beddbfe446a9450137e76ad694dca7c098cfe57c",
"0xa535e0b34ae79264ef53d5a63e1388f1205af63974c6f4c7232a91a86e329358",
"0xa314c0b34224954729128051470029c8f723bfb86e43dcd46ff5a399c9351e0b",
"0x326f02ef50171911d06fff4ae00194be5cda3529aa5a6c8e7897980bdf4d1bf7",
"0x4280038aeae95969d27419af8389578f3b6a510c2b3a2fd401c3ff2f29810457",
"0xe2371111710514e2f01ec49ad46b0feb66eb5461afc1e512b666e75f8c587864",
"0x58e050f49b14936d58ddb23b85743573624e2d3d18787588f493b0c485d4c9b6",
"0xbbfcd38d2678d553c6305e8ca68545e656ed8f3363febb2dbea2d246291e0740",
"0xdcac201067f87254b759b9c530e2e31ac624f25ff260751d228f44aa5e0b9a43",
"0xfe275d4dd7afeb4fd8a45c0ee55a1033983844a687e0fb564d722d1e3cb29aff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

