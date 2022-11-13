# Fetching Offchain data into a Moonbase Alpha Solidity Contract

As an existing HRMP channel is not yet open between Moonriver and Robonomics, our initial idea was to use a custom parachain that uses offchain workers to bring in grid data and uses XCM to communicate with moonbase alpha. We have had no issues getting off-chain workers to work in stand alone substrate node template (Available here https://github.com/polkadotrafat/substrate-offchain-worker-demo ), we ran into several configuration issues while trying to run it on cumulus parachain template. While we are working to fix the issue, we decided to use chainlink oracle node to bring grid data directly into our solidity contracts on moonbase alpha testnet.

### Current Solution : Chainlink Node on Moonbase Alpha Testnet

Currently, we have a Chainlink node running on Moonbase Alpha at ```0x7625dAd074438ae964107FE927cbdbCE8c6355c8``` . The Oracle contract is deployed at ```0xd4d9ac4ecf5ddf18056ce6a91d0a8e7b0c910cce``` . The ANY API job specification that we are using to fetch offchain data is

```
{
  "initiators": [
    {
      "type": "runlog",
      "params": { "address": "0xd4d9ac4ecf5ddf18056ce6a91d0a8e7b0c910cce" }
    }
  ],
  "tasks": [
    { "type": "httpget" },
    { "type": "jsonparse" },
    { "type": "multiply" },
    { "type": "ethuint256" },
    { "type": "ethtx" }
  ]
}
```

