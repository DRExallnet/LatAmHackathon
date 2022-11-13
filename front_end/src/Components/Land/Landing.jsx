import React from 'react'
import { useEffect } from "react";
import { useHref } from "react-router-dom";
import "./landing.css";


const Landing = () => {
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
    <main className="div_container">
      <div className="content-frame-div">
        <div className="hero-section-div">
          <div className="head-text-div" id="min_container_text">
            <div className="text-div1" id="header_text">
              <div className="header-text-div" id="header">
                <img className="image-icon" alt="" src="../image@2x.png" />
                <img
                  className="abstract-image-hero-icon"
                  alt=""
                  src="../abstract-image-hero@2x.png"
                  data-animate-on-scroll
                />
                <div className="texts-div">
                  <div className="title-text-div">
                    <div className="title-head-div">
                      <div className="fast-ling-div">
                        <div className="title-power-text-div">
                          <div className="frame-div1">
                            <h1
                              className="distributed-h1"
                              data-animate-on-scroll
                            >
                              DISTRIBUTED 
                            </h1>
                          </div>
                          <div className="frame-div2">
                            <h1
                              className="clean-energy-h1"
                              data-animate-on-scroll
                            >
                              CLEAN ENERGY
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="descriptive-text-div"
                      data-animate-on-scroll
                    >
                      <div className="power-the-clean-energy-transit">
                      <span className="power-the-clean">
                          DREx is a decentralized renewable energy supply
                          network powered by <span className="trustlessly-span">IoT + Blockchain.</span>
                        <span className="power-the-clean">{` Power the clean energy transition of emerging markets `}</span>
                        <span className="trustlessly-span">trustlessly.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="buttons-div"
                    id="Buttons_explore"
                    data-animate-on-scroll
                  >
                    <button className="discover-normal-button">
                      <div className="solar-projects-div">
                        <a href="/explore" className="buy-div">
                        Projects</a> </div>
                      <div className="line-div" />
                    </button>
                    <button className="buy-normal-button">
                      <div className="buy-div">
                      <a href="/solarprojectmochasa" className="buy-div">
                        Buy</a></div>
                        <div className="line-div" />
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="icon1"
                alt=""
                src="../icon1.svg"
                data-animate-on-scroll
                href="https://mobile.twitter.com/DrexNetwork"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Landing;
