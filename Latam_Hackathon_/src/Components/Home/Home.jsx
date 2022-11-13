import React, {useEffect} from 'react'
import './home.css'
import video from '../Assets/solar_preview.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='home' className='home'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="video/mp4"></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
        <span  className="smallText">
          Our Portafolio
        </span>
        <h1 data-aos="fade-down" className="homeTitle">
        Search solar projects
        </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your next investment:</label>
            <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            <GrLocation className="icon"/>
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="city">Select project starting date:</label>
            <div className="input flex">
            <input type="date" />
           
            </div>
          </div>


          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="city">Capacity installed:</label>
            <h3 className="total">range from 100kW - 1MW</h3>
            </div>
            <div className="input flex">
              <input type="range" max="1000" min="100" />
            </div>
          </div>

          <div className="searchOptions flex">
           <HiFilter className="icon"/>
           <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
         <div className="rightIcons">
         {/*  <FiFacebook className="icon"/>
          <AiOutlineInstagram className="icon"/> */}
          <AiOutlineTwitter className="icon"/>
         </div>
         {/* <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
         </div> */}
        </div>
      </div>
    </section>
  )
}

export default Home