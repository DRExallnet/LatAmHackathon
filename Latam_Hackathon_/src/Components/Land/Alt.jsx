import React from 'react'
import { useEffect } from "react";
import "./Alt.css"
import img from '../Assets/electric_black.png'



const Alt = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
  <main className='bg'>
     <div className='img_bg_1'>
                    <img
                      className="abstract-image-hero-icon"
                      alt=""
                      src="../abstract-image-hero@2x.png"
                      data-animate-on-scroll
                    />
    <div className='motor'>
     <div className='container'>
      <div className='left_container'></div>
      </div>
        <div className='Main_Text'>
          <h2>
            Descentralized Clean Energy
          </h2>
          <h3>
          DREx is a decentralized renewable energy supply network powered by <span className="trustlessly-span">IoT + Blockchain.</span>
          <span className="power-the-clean">{`Power the clean energy transition of emerging markets `}</span>
          <span className="trustlessly-span">trustlessly.</span>
          </h3>
        </div>
      <div className='right_container'>
       <div className='Main_Img'>
      <img className="image-icon" alt="" src="../image@2x.png" />
        </div>
      </div>
      </div>
    </div>
  </main> 
 
  );
};

export default Alt;
