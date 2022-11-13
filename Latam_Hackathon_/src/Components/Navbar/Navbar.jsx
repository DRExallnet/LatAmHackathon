import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {MdOutlineTravelExplore} from 'react-icons/md'
import logo from '../Assets/e-nft_logo.png'

const Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  return (
    <section className='navBarSection'>
       <header className="header flex">
        
          <div className="logoDiv">
            <a href="/" className="logo flex">
            <img src={logo} alt="img/png"></img></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="http://www.drexall.net/" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="/" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="/explore" className="navLink">Projects</a>
              </li>
              <li className="navItem">
                <a href="/solarprojectmochasa" className="navLink">Invest </a>
              </li>
              <li className="navItem">
                <a href="/" className="navLink">Contact</a>
              </li>
              <button className="btn">
                <a href="/">OPEN DASHBOARD</a>
              </button>

            </ul>
              <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
    </section>
  )
}

export default Navbar