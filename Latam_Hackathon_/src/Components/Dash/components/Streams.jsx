import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "../components/ReusableStyles";
import { AreaChart, Area, Tooltip, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Legend, Brush } from "recharts";
import {useState, useEffect} from "react";
import moment from 'moment';


 function Streams() {

     const CustomizedAxisTick = ({ x, y, payload }) => {
      const dateTip = moment(payload.value)
        .format("ll")
        .slice(0, 6);
         return (
        <g transform={`translate(${x},${y})`}>
       <text x={23} y={0} dy={14} fontSize="0.90em" fontFamily="bold" textAnchor="end" fill="#363636">
         {dateTip}</text>
        </g>
       );
      }
  
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(`http://drex-env.eba-jkxuyqbq.us-east-1.elasticbeanstalk.com/grid/list`)
      .then(response => response.json())
      .then(json => setData(json))
  }
  console.log(data);

  const sliderData = [
    {
  
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Energy production </h4>
          <h1 dataKey="current">450,210⚡Wh</h1>
        </div>
       
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}
                  margin={{ top: 15, right: 0, left: 0, bottom: 0 }} >
            <XAxis dataKey="datetime" tick={CustomizedAxisTick} />
            <YAxis />
            <Tooltip />
            <Legend />
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--primary-color)"
                  stopOpacity={0.4}
                />
                <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            
            <Area type="monotone"
              dataKey="energy"
              stroke="var(--primary-color)"
              strokeWidth={2}
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
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

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
    .slider {
      .services {
        display: flex;
        gap: 1rem;
        .service {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          min-width: 5rem;
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  .chart {
    height: 15rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .title {
        text-align: center;
      }
      .slider {
        .services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .service {
            gap: 0.5rem;
            min-width: 1rem;
          }
        }
      }
    }
  }
`;

export default Streams;
