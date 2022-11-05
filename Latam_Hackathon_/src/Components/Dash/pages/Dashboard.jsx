import React, { useEffect } from "react";
import styled from "styled-components";
import Earnings from "../components/Earnings";
import Navbar from "../components/Navbar";
import Streams from "../components/Streams";
import TopReleases from "../components/TopReleases";
import scrollreveal from "scrollreveal";
function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row,
        .row2
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row">
            <Streams />
        </div>
        <div className="row2">
          <TopReleases />
          <Earnings />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);

  .grid {
    padding: 1rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    .row {
      display: flex;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    
    .row2 {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: max-content;
    .grid {
      grid-template-columns: 1fr;
      padding: 1rem;
      
      height: 100%;
      width: 100%;
      .row,
      /* height: max-content; */
      grid-template-columns: 1fr;
      .row2 {
        /* height: max-content; */
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Dashboard;
