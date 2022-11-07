import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiClipboardList} from 'react-icons/hi'
import img from '../Assets/img_mochasa.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Guayaquil',
  location: 'Ecuador',
  grade: 'MOCHASA ',
  fees: '200 kW',
  description: 'Mochasa is a company with over 50+ years in the Shrimp Feedstock Industry looking to become more sustainable.' 
  },
]

const Main_project = () => {
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])
  return (
    <section id='main' className='main section container'>
      <div className="secTitle">
        <h3 className="title">
          Project overview
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return (
              
              <div key={id} data-aos="fade-up" className="singleDestination">
      
                 <div className="imageDiv">
                 <img src={imgSrc} alt="" />
                 </div>
      
                <div className="cardInfo">
                 <h4 className="destTitle">{destTitle}</h4>
                 <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                 </span>
      
                 <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>PPA </small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                 </div>
      
                 <div className="desc">
                  <p>{description}</p>
                 </div>
      
                 <button className='btn flex'>DETAILS <HiClipboardList className="icon"/> </button>
                </div>
              </div>
              
      
            )
          }) 
        }
      </div>
      <div className="secTitle">
        <h3 className="title">
          Legal Documentation
        </h3>
      </div>
      

      
    </section>
  )
}

export default Main_project