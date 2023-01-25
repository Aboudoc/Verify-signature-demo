# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Sign off chain using metamask

- Hash the message:
  Get the message hash using the function messageHash() and copy it

- Sign the message hash on the consle using metamask

```shell
ethereum.enable()
```

This will return a promise, open the promise and make sure it is 'fulfilled'

```shell
account = "goerliAddress"
```

```shell
hash = "messageHash from first step"
```

```shell
ethereum.request({method: "personal_sign", params: [account, hash]})
```

Confirm on metamask, this will return a promise. The signature can be found inside the promise returned
