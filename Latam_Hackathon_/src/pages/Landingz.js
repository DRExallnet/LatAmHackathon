import React from 'react';
import './Landingz.css';
import Footer from '../Components/Footer/Footer';
import Landing from '../Components/Land/Landing';
import Navbar from '../Components/Navbar/Navbar';
import Exp_Cards from '../Components/explainer_cards/exp_c';

const Landingz = () => {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Exp_Cards/>
    <Footer/>
    </>
  )
}

export default Landingz