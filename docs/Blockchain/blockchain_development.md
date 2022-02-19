---
title: Smart Contract Resources
tags:
    - blockchain
    - smart contract
    - technology
---
# Web3 Resources

[Maxwill's Skill Development](/z5Av2ObVRLCkmeINnc-5Tg)


## Stations
- https://solidity-by-example.org/
- https://www.smartcontractresearch.org
- https://cryptodevhub.io/wiki/ethereum-virtual-machine-security
- https://consensys.github.io/smart-contract-best-practices
- https://docs.soliditylang.org/en/v0.8.11/units-and-global-variables.html#special-variables-and-functions
- https://docs.openzeppelin.com/learn/deploying-and-interacting
- MEMPOOL api: https://docs.blocknative.com/notify-sdk



---

TMP
https://medium.com/portis/part-three-creating-and-signing-ethereum-transactions-e9cca44d7e2d
https://medium.com/coinmonks/whats-the-best-ethereum-block-explorer-10-alternatives-to-etherscan-8eb5f2be263d
https://docs.soliditylang.org/en/v0.8.11/natspec-format.html?highlight=documentation

## Go with Ethereum
https://goethereumbook.org/en/

## Node

### Local
- https://ethereum.org/en/developers/tutorials/run-light-node-geth/

---

## EVM foundamentals
- https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-i-introduction-832efd2d7737/

### Events
- https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378
- https://docs.soliditylang.org/en/v0.8.4/abi-spec.html#events

### Special Functions
- delegateCall
- call
- fallback
- receive (payable, no data)
- assempltcreate2
    - https://medium.com/@martinetlee/notes-on-eip-1014-create2-1-351c47e22a89
    - https://docs.soliditylang.org/en/v0.8.11/units-and-global-variables.html#special-variables-and-functions
- self-destruct
- encoded function code
    - https://medium.com/linum-labs/a-technical-primer-on-using-encoded-function-calls-50e2b9939223
- access list
    - https://docs.ethers.io/v5/api/providers/types/#types--access-lists
- calldata
    - https://docs.soliditylang.org/en/v0.8.11/abi-spec.html#examples
    - https://docs.soliditylang.org/en/v0.8.11/units-and-global-variables.html#abi-encoding-and-decoding-functions
    - `(bool success, bytes memory data) = address(this).call{gas: 5000}(abi.encodeCall(this.sd, ()));`
    - `signer.sendTransaction({..., data:?})`
    - working with `ethers.js` => `Interface`, `abiCoder.encode`


---


## DeFi
- protocol https://hackmd.io/@zinstitute/defi-research-live-sharing-01
- https://ethereum.org/zh-tw/developers/tutorials/uniswap-v2-annotated-code/

---

## Web3 + Frontend
- https://github.com/pancakeswap/pancake-frontend
- [web3-react](https://github.com/NoahZinsmeister/web3-react)
    - [t, hooks] = initializeStore< T>, use deprecateded
- sveltekit and next

---

## Tricks
- https://solidity-by-example.org/app/minimal-proxy/
- denial of service
- in constructor, address code size (extcodesize) is 0
- manipulate block.timestamp
- sandwitch attack
- metatx
    - https://github.com/ProjectOpenSea/meta-transactions/blob/main/contracts/ERC721MetaTransactionMaticSample.sol

## Templates
https://github.com/scaffold-eth/scaffold-eth
https://github.com/ethereum-boilerplate/ethereum-boilerplate
https://github.com/MoralisWeb3/react-moralis

---

## Hardhat + Typesript V2
```shell
yarn init -y
yarn add -D hardhat
yarn run hardhat // start a typescript project
yarn add -D "..." // install the dependencies mentioned in the example
yarn add -D dotenv // use dotenv    
yarn add -D @openzeppelin/contracts
```
then you can 
```shell
yarn run hardhat accounts/compile/test    
```
remember to change your configs
for example: tsconfig.json
```json
"resolveJsonModule": true
```
one can shorten this by define `yarn run hardhat test` to `yarn hh test` by modifying `package.json`

---

0x4e38A4205594dB696F0733F0E391beDb7dd6085a

## Hardhat + Typscript (Archive)
https://hardhat.org/guides/typescript.html#installing-dependencies
https://rahulsethuram.medium.com/the-new-solidity-dev-stack-buidler-ethers-waffle-typescript-tutorial-f07917de48ae
https://dev.to/stermi/how-to-deploy-your-first-smart-contract-on-ethereum-with-solidity-and-hardhat-5efc
https://stermi.medium.com/how-to-deploy-your-first-smart-contract-on-ethereum-with-solidity-and-hardhat-22f21d31096e
```
mkdir .
cd .
npm init -y  
yarn add --dev hardhat  
npx hardhat
yarn
yarn add --dev ts-node typescript
yarn add --dev chai @types/node @types/mocha @types/chai
yarn add --dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
yarn add --dev @openzeppelin/contracts
yarn add --dev @nomiclabs/hardhat-etherscan
yarn add --dev dotenv
@typechain/hardhat
```
```ts
import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
export default {
  solidity: '0.8.4',
};
```
```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": [
    "./scripts",
    "./test"
  ],
  "files": [
    "./hardhat.config.ts"
  ]
}
```

``` ts
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello, Hardhat!');

  await greeter.deployed();

  console.log('Greeter deployed to:', greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```
```ts

import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Hello, world!');
    await greeter.deployed();

    expect(await greeter.greet()).to.equal('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
```