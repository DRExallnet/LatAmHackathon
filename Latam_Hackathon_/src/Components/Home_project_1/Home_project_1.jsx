import React, {useEffect} from 'react'
import './home.css'
import video from '../Assets/video_previews/mochasa_preview.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='home' className='home'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="video/mp4" id='wayne'></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
        <span  className="smallText">
          Guayaquil, Ecuador
        </span>
        <h1 data-aos="fade-down" className="homeTitle">
        Mochasa PPA 200 kW
        </h1>
        </div>
      </div>
    </section>
  )
}

export default Home