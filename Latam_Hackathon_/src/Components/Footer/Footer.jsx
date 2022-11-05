import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../Assets/liquidblue_preview.mp4'
import {FiSend} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import logo from '../Assets/electric_black.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
const Footer = () => {
   useEffect(()=>{
      Aos.init({duration: 2000})
   }, [])
  return (
    <section id='footer'className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
     <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" data-aos-duration="2000" className="text">
          <small>LET'S KEEP IN TOUCH</small>
          <h2>Invest with us</h2>
        </div>
        <div className="inputDiv flex">
          <input data-aos="fade-up" data-aos-duration="2000" type="text" placeholder='Enter Email Address' />
          <button data-aos="fade-up" data-aos-duration="3000" className='btn flex'  type='submit'>SEND  <FiSend className="icon"/></button>
        </div>
      </div>
       
       <div className="footerCard flex">
         <div className="footerIntro flex">
         <div className="logoDiv">
            <a href="#" className="logo flex">
            <img src={logo} alt="img/png"></img></a>
          
          </div>

          <div data-aos="fade-up" data-aos-duration="2000"  className="footerParagraph">
          DREx is a fintech platform accelerating the clean energy transition in emerging markets, bridging the
         financial gap among institutional investors and corporations that want to go solar, under
         a trusted framework based on IoT + blockchain.          
         </div>

          <div data-aos="fade-up" data-aos-duration="3000"  className="footerSocials flex">       
          <AiOutlineTwitter className="icon"/>
          {/* <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          <FaTripadvisor className="icon"/> */}
          </div>

         </div>

         <div className="footerLinks grid">
          {/* Group One */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
                OUR COMPANY
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Contact
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Technology
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  FAQs
               </li>
           </div>

          {/* Group Two */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
               LEGAL
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Terms & Conditions
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Licenses & Permits
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Compliance
               </li>

             
           </div>

          {/* Group three */}
           <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
               <span className="groupTitle">
                OUR OFFICES
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Zurich
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Guayaquil
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  San Francisco
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  São Paulo
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Abu Dhabi
               </li>
           </div>
         </div>

         <div className="footerDiv flex">
           <small>COPYRIGHTS RESERVED - DREX 2022</small>
         </div>
       </div>

     </div>

    </section>
  )
}

export default Footer