require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hockey knife off suggest name random night unfold hockey civil army gesture'; 
let testAccounts = [
"0x8d981cf3047e1c42d6c45c6b99c7ba99c364b8d0f6037f0deced7e711d609ec6",
"0x6892c583c2f11e172c83d3e4a874dc65edb85df075f0e9df142ed5fa158b2bab",
"0x0c3033706e13229261fd8010ea4e4fda2a2b92183cbcac225d7f6b7b3b8d9c9c",
"0xce7a135e698810b770b3d049c236690bdfbc5cd335b70871efa32598cf063a92",
"0xc3ebd4b91251eaf3813dd844a91b054bddd2b5433dd32c568f3d9c7541d9cfd0",
"0xc0d842dacac90374765172c0685421d8d62a477ee04be660f1beb7e4249d61b3",
"0xbce6e7803f8f8ca08ba1ffc4fca05e0057c37fb3fb2a2b6a278edea7357b64cd",
"0xf95ac309513a5632cbca781e0d94505337370f9f0b1d5bd3d1912a8ec5ceb29f",
"0xb13091013046658f7b553d6fb5165f38d7d2d72d75b2acf4e826cc35d23d9105",
"0xda4aec0631bc962fa8c913d6e7ebe8a30f90a5597e38b4db6ca933df89ff52b8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

