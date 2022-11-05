import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "./ReusableStyles";
import pic from "./drex_nft_mock.png";

function TopReleases() {
  
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>NFT</h4>
        </div>
        <div className="filters">
          <span></span>
          <span></span>
          <button>BUY</button>
          

        </div>
      </div>
      <div className="img">
        <div className="contz">
            <img alt="nft_" src={pic}/>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .title {
    }
    .filters {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      color: var(--primary-color);
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
  .img {
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  .contz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  }
 

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .filters {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    
`;

export default TopReleases;
