import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiClipboardList} from 'react-icons/hi'
import img from '../Assets/img .jpg'
import img2 from '../Assets/img  (3).jpg'
import img3 from '../Assets/img  (2).jpg'
import img4 from '../Assets/img  (4).jpg'
import img5 from '../Assets/img  (5).jpg'
import img6 from '../Assets/img  (10).jpg'
import img7 from '../Assets/img  (7).jpg'
import img8 from '../Assets/img  (8).jpg'
import img9 from '../Assets/img  (9).jpg'
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


  {
  id:2,
  imgSrc: img2,
  destTitle: 'Guayaquil',
  location: 'Ecuador',
  grade: 'CORPORATE 2 ',
  fees: '300 kW',
  description: 'Frozen service company.' 
  },


  {
  id:3,
  imgSrc: img3,
  destTitle: 'Guayaquil',
  location: 'Ecuador',
  grade: 'CORPORATE 3 ',
  fees: '500 kW',
  description: 'Food manufacture company.'  
  },


  {
  id:4,
  imgSrc: img4,
  destTitle: 'Quito',
  location: 'Ecuador ',
  grade: 'CORPORATE 4 ',
  fees: '500 kW',
  description: 'Food manufacture company.'  
  },


  {
  id:5,
  imgSrc: img5,
  destTitle: 'Cuenca',
  location: 'Ecuador',
  grade: 'CORPORATE 5 ',
  fees: '700 kW',
  description: 'Brick and Porcelain Factory.'  
  },


  {
  id:6,
  imgSrc: img6,
  destTitle: 'Cuenca',
  location: 'Ecuador ',
  grade: 'CORPORATE 6 ',
  fees: '1000 kW',
  description: 'Food manufacture company. '  
  },


  {
  id:7,
  imgSrc: img7,
  destTitle: 'Guayaquil',
  location: 'Ecuador',
  grade: 'CORPORATE 7',
  fees: '1000 kW',
  description: 'Food manufacture company.'  
  },


  {
  id:8,
  imgSrc: img8,
  destTitle: 'Guayaquil',
  location: 'Ecuador',
  grade: 'CORPORATE 8 ',
  fees: '800 kW',
  description: 'Plastic recycling manufacture.' 
  },


  {
  id:9,
  imgSrc: img9,
  destTitle: 'Quito',
  location: 'Ecuador',
  grade: 'CORPORATE 9 ',
  fees: '700 kW',
  description: 'Chemical manufacture.' 
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])
  return (
    <section id='main' className='main section container'>
      <div className="secTitle">
        <h3 className="title">
          Solar project portafolio
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
                 <button className='btn flex'><a href="/solarprojectmochasa">DETAILS</a><HiClipboardList className="icon"/> </button>
                </div>
              </div>
      
            )
          }) 
        }
      </div>
     
    </section>
  )
}

export default Main