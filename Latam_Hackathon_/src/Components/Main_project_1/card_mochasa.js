import React, {useEffect, useState } from 'react'
import './card_mochasa.css';
import img from '../Assets/img_mochasa.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import privateKey from './.secret';
import mintABI from './AdvancedCollectible.json';
import Web3 from 'web3';

const Mochasa = () => {
    useEffect(()=>{
        Aos.init({duration: 4000})
     }, []);

// 1. Import dependencies

// 2. Import the contract abi

var nft_abi = mintABI.abi;

// 3. Add the Web3 provider logic here:
const NFT_CONTRACT_ADDRESS = '0xa62D32475E30E9e4072707c9c5A07eE51b443040'

// 4. Import account information - TODO: Connect metamask wallet here, get account connected in front-end
const accountFrom = {
    address: '0x32FA48d01720CCa0c39BC04DA139c5d8B1448525',
    privateKey: '37b1423508843d85d6dcf87407d6f10a462b3d5936252e20169b04198dc02f9d',
}; 


const [account, setAccounts] = useState([]);

async function connectAccounts() {
  if (window.ethereum){
    const account = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    setAccounts(account);
  }
}

useEffect(() => {
  connectAccounts();
}, []);



// MINTING

const [mintAmount, setMintAmount] = useState(1);

// Checking for correct values
console.log(accountFrom.address)
console.log(accountFrom.privateKey)
console.log(NFT_CONTRACT_ADDRESS)

async function get_balance() {
    var balance = await web3.eth.getBalance(accountFrom.address); //Will give value in.
    console.log(balance)
}
get_balance();

// 5. Create transaction, sign and send to testnet
async function run(){
    const web3 = new Web3('https://moonbeam-alpha.api.onfinality.io/public');
    web3.eth.getChainId().then(console.log);
    const contract = new web3.eth.Contract(nft_abi, accountFrom.address);
    const account1 = web3.eth.account.privateKeyToAccount(accountFrom.privateKey);
    const transaction1 = contract.methods.createCollectible("None");
    const receipt1 = await mint(web3, account1, transaction1);
    console.log(receipt1);
}

async function mint(web3, account, transaction) {
    const options  = {
        to: NFT_CONTRACT_ADDRESS,
        chainId: 1287, 
        data    : transaction.encodeABI(),
        gas     : 8000000,
    };
    const signed  = await web3.eth.account.signTransaction(options, accountFrom.privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    return receipt;
}
   
  
  
return(
    <div className="tarjeta">
        <div className="contenido">
            <div className="ladoIzq">
                <h2 className="titulo">Molinos Champion S.A. Mochasa</h2>
                <h4 className="destTitle">Guayaquil, Ecuador</h4>
                    <div className="cuerpo">
                    <p>Mochasa is a company with over 50+ years in the Shrimp Feedstock Industry looking to become more sustainable.</p>
                    <a className='btn' href="http://www.molinoschampion.com/">Webpage</a>
                    <a className='btn' onClick={run}> MINT </a>
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