import React, {useEffect} from 'react'
import './main.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from "@ethersproject/units";
import Mochasa from '../Main_project_1/card_mochasa';
import {
  
  Text,
  
} from '@chakra-ui/react';

const Main_project = ({ data }) => {
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])
 function trimAccount(accountString) {
  return `${accountString.slice(0, 6)}...${accountString.slice(
    accountString.length - 4,
    accountString.length
  )}`;}
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  

  return (
    <section id='main' className='main section container' data-aos="fade-up">
      <button className='btn' onClick={() => activateBrowserWallet()}>{account ? trimAccount(account) : `Connect Wallet`}</button>              
      <div className="secTitle">
        <h3 className="title">
          Project overview
        </h3>
      </div>
      {<Mochasa />}
    </section>
  
    )
  }


export default Main_project