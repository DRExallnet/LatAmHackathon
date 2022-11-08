import React, {useEffect} from 'react'
import './main.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Mochasa from '../Main_project_1/card_mochasa';


const Main_project = ({ data }) => {
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])

  return (
    <section id='main' className='main section container' data-aos="fade-up">
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