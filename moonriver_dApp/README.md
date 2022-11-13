# DREx DApp on Moonriver

## Installation

The smart contracts responsible for NFT generation and token minting consist of three contracts:
- [Our_ERC20.sol](./contracts/Our_ERC20.sol)  
- [AdvancedCollectible.sol](./contracts/AdvancedCollectible.sol) 
- [DrexApi.sol](./contracts/DrexApi.sol) 

### Dependencies 
First install brownie:
```bash
pip3 install -r requirements.txt
```

Once Brownie has been installed, add moonbase-alpha to the networks list in your Brownie environment. Additional instructions on how to do this can be found [here](https://docs.moonbeam.network/builders/build/eth-api/dev-env/brownie/).

### The ERC20 Contract

This contract is used for the generation of the DREx token. To deploy this smart contract we need to provide the initial supply of the token and the tokens will be minted. This command will deploy the ERC20 smart contract and the Advanced Collectible contract. 

```bash
brownie run ./scripts/advanced_collectible/deploy_ecr20.py --network moonbeam-test
```

### The Advanced Collectible Contract

This contract keeps track of NFT minting, DREx token distribution, and tracking of DREx tokens in a given energy pool. We can create multiple NFTs for each of the solar installation using this contract. Each NFT keeps track of the amount of DREx tokens each owner holds and allows for withdrawal by each respective holder at a time of his/her choosing. To deploy the contract, run the script:

```bash
brownie run ./scripts/advanced_collectible/deploy_adv.py --network moonbeam-test
```

To mint an NFT, run the following command:

```bash
brownie run ./scripts/advanced_collectible/create_collectible.py --network moonbeam-test
``` 

A separate Python function is used to generate the metadata for each of the NFTs produced by the Advanced Collectibles contract. The <code>sample_metadata.py</code> script in the <code>[metadata](./metadata)</code> folder is used to generate the metadata template. This can be modified according to the needs of a given solar installation. All the images which are linked to each NFT are stored in the <code>[img](./img)</code> folder. To upload a file on IPFS and generate the metadata for the files, run the following:

```bash
brownie run ./scripts/advanced_collectible/create_metdata.py --network moonbeam-test
```
This will create the metadata for the NFTs and set the token URI.

We also include helpful_scripts.py, which is a place to put miscellaneous functions for later use. To deploy the contract and mint NFTs we have written a bash script which will run the functions mentioned above <code>runScripts.sh</code>. DREx tokens accrued by NFTs in a given collection can be redeemed by calling the <code>transferERC20()</code> function.


### The DREx sensor feed

The DREx oracle feed, as referred to in <code>[asset_transfer](../asset_transfer)</code> also is necessary in obtaining real-time sensor data from the Robonomics. To deploy this contract, run the following

```bash
brownie run ./scripts/advanced_collectible/deploy_client.py --network moonbeam-test
```
