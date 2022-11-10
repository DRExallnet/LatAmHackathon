import React, {useEffect, useState } from 'react'
import './card_mochasa.css';
import img from '../Assets/img_mochasa.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './abi.json';
import './.secret';
import contract from './AdvancedCollectible.json'
import { ethers } from 'ethers';

const Mochasa = () => {
    useEffect(()=>{
        Aos.init({duration: 4000})
     }, [])

const contractAddress = "0xa62D32475E30E9e4072707c9c5A07eE51b443040";
const abi = contract.abi;
const providerRPC = {
    moonbase: {
      name: 'moonbase-alpha',
      rpc: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // 0x507 in hex,
    },
  };
/* const provider = new ethers.providers.JsonRpcProvider(QUICKNODE_HTTP_ENDPOINT)*/
const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.StaticJsonRpcProvider(
            providerRPC.moonbase.rpc, 
            {
              chainId: providerRPC.moonbase.chainId,
              name: providerRPC.moonbase.name,
            }
          );
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://moonbase.moonscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object does not exist");
      }

    } catch (err) {
      console.log(err);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='btn'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='btn'>
        Buy NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])
     
/* const { ethers } = require("ethers")
const privateKey = readFileSync(".secret").toString().trim()
const QUICKNODE_HTTP_ENDPOINT = "https://rpc.api.moonbase.moonbeam.network"
const provider = new ethers.providers.JsonRpcProvider(QUICKNODE_HTTP_ENDPOINT)
const contractAddress = "0xa62D32475E30E9e4072707c9c5A07eE51b443040"
const contractAbi = fs.readFileSync("abi.json").toString()
const contractInstance = new ethers.Contract(contractAddress, contractAbi, provider)
async function getGasPrice() {
    let feeData = await provider.getFeeData()
    return feeData.gasPrice
}

async function getWallet(privateKey) {
    const wallet = await new ethers.Wallet(privateKey, provider)
    return wallet
}

async function getChain(_provider) {
    let chainId = await _provider.getNetwork()
    return chainId.chainId
}

async function getContractInfo(index, id) {
    let contract = await contractInstance.getERC1155byIndexAndId(index, id)
    return contract;
}

async function getNonce(signer) {
    return (await signer).getTransactionCount()
}
async function createCollectible(index, name, amount) {
    try {
        if (await getChain(provider) === 1287) {
            const wallet = getWallet(privateKey)
            const nonce = await getNonce(wallet)
            const gasFee = await getGasPrice()
            let rawTxn = await contractInstance.populateTransaction.mintERC1155(index, name, amount, {
                gasPrice: gasFee, 
                nonce: nonce
            })
            console.log("...Submitting transaction with gas price of:", ethers.utils.formatUnits(gasFee, "gwei"), " - & nonce:", nonce)
            let signedTxn = (await wallet).sendTransaction(rawTxn)
            let reciept = (await signedTxn).wait()
            if (reciept) {
                console.log("Transaction is successful!!!" + '\n' + "Transaction Hash:", (await signedTxn).hash + '\n' + "Block Number: " + (await reciept).blockNumber + '\n' + "Navigate to https://moonbase.moonscan.io/tx/" + (await signedTxn).hash, "to see your transaction")
            } else {
                console.log("Error submitting transaction")
            }
        }
        else {
            console.log("Wrong network - Connect to configured chain ID first!")
        }
    } catch (e) {
        console.log("Error Caught in Catch Statement: ", e)
    }
}
createCollectible(0, "drexnft", 1) */

return(
    <div className="tarjeta">
        <div className="contenido">
            <div className="ladoIzq">
                <h2 className="titulo">Molinos Champion S.A. Mochasa</h2>
                <h4 className="destTitle">Guayaquil, Ecuador</h4>
                    <div className="cuerpo">
                    <p>Mochasa is a company with over 50+ years in the Shrimp Feedstock Industry looking to become more sustainable.</p>
                    <a className='btn' href="http://www.molinoschampion.com/">Webpage</a>
                    <>{currentAccount ? mintNftButton() : connectWalletButton()}</>
                    </div>
                </div>
                <div className="ladoDer">
                    <img className="image-mochasa" alt="" src={img} />
            </div>
        </div>
    </div>
 );
};


export default Mochasa;