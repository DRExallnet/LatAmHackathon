import React, {useEffect, useState } from 'react'
import './card_mochasa.css';
import img from '../Assets/img_mochasa.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import privateKey from './.secret';
import mintABI from './AdvancedCollectible.json';
import Web3 from 'web3';
import { ethers } from 'ethers'

const Mochasa = () => {
    useEffect(()=>{
        Aos.init({duration: 4000})
     }, []);

     const providerRPC = {
      moonbase: {
        name: 'moonbase-alpha',
        rpc: 'https://rpc.api.moonbase.moonbeam.network',
        chainId: 1287,
      },
    };
    const contractAddress = "0xa62D32475E30E9e4072707c9c5A07eE51b443040"
    const contractAbi = mintABI.abi


     const askContractToMintNft = async () => {
      
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
          const nftContract = new ethers.Contract(contractAddress, contractAbi, signer);
  
          console.log("Initialize payment");
  
          console.log("Going to pop wallet now to pay gas...")
          let nftTxn = await nftContract.createCollectible("None");
    
          console.log("Mining...please wait.")
          await nftTxn.wait();
          
          console.log(`Mined, see transaction: https://moonbase.moonscan.io/tx/${nftTxn.hash}`);
    
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
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
                    <a className='btn'onClick={askContractToMintNft}> MINT </a>
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