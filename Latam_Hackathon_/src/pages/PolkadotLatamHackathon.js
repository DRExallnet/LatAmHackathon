import { useEffect } from "react";
import { useHref } from "react-router-dom";
import "./PolkadotLatamHackathon.css";
import Navbar from '../Components/Navbar/Navbar'

const PolkadotLatamHackathon = () => {
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
    <main className="polkadot-latam-hackathon-main">
      <>
    <Navbar/>
    </>
      <div className="navbar-div">
        <img
          className="electric-blue-1-icon"
          alt=""
          src="../logo_electric@2x.png"
        />
        <div className="nav-frame-div">
          <div className="menulinks-div">
            <div className="links-div">
              <div className="about-div">home</div>
              <div className="technology-div">projects</div>
              <div className="nft-bonds-div">buy</div>
            </div>
            <button className="outlineinterfacemenu-button">
              <img className="Icon" alt="" src="../icon.svg" />
            </button>
          </div>
          <div className="frame-div">
            <div className="button-lang-div">
              <img
                className="icons8-geography-48-1"
                alt=""
                src="../icons8geography48-1@2x.png"
              />
              <div className="eng-div">eng</div>
              <img className="arrow-down-icon" alt="" src="../arrow-down.svg" />
            </div>
            <button className="button-dapp">
              <button className="dapp-button">
                <div className="text-div">LAUNCH DAPP</div>
              </button>
            </button>
          </div>
        </div>
      </div>
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
                        <span className="power-the-clean">{`Power the clean energy transition of emerging markets `}</span>
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
                      <div className="solar-projects-div">Solar Projects</div>
                      <div className="line-div" />
                    </button>
                    <button className="buy-normal-button">
                      <div className="buy-div">{`BUY `}</div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolkadotLatamHackathon;
