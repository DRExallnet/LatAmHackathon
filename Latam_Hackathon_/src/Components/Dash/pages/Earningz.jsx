import React, { useEffect } from "react";
import styled from "styled-components";
import Earnings from "../components/Earnings";
import TopReleases from "../components/TopReleases";
import scrollreveal from "scrollreveal";
import IRECS from "../components/Irecs"

function Earningz() {
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
      <div className="grid">
          <Earnings />
          <IRECS />
          <TopReleases />
      </div>

    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);

  .grid {
    padding: 2rem;
    padding-top: 10;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 10rem;
    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
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
      height: max-content;
      .row,
      .row2 {
        /* height: max-content; */
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Earningz;
