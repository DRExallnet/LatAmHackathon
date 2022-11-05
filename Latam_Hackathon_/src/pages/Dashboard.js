import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Dash/components/Sidebar";
import RightSidebar from "../Components/Dash/components/RightSidebar";
import Dashboard from "../Components/Dash/pages/Dashboard";
import Solar from "../Components/Dash/pages/Solar";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Earningz from "../Components/Dash/pages/Earningz";
import {web3Accounts, web3Enable} from "@polkadot/extension-dapp";
import RpcApif from "../Components/Dash/pages/RpcApi_Slicer_2";
import Pacman from "../Components/Dash/pages/Pacman";




function Dapp() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
      
    );
  }, []);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
        extensionSetup()
    }, []);

    const extensionSetup = async () => {
        const extensions = await web3Enable('Wallet-connect-tutorial');
        if (extensions.length === 0) {
            setError('No extension installed!');
            return;
        }
        const accounts = await web3Accounts();
        setAccounts(accounts);
        console.log(accounts);
    };



  return (
      <Div>
      <Router>
        <Sidebar />

            <Routes>
            {/*<Dashboard /> */}

            <Route path="/" element={<Dashboard/>} />

             {/*<Solar /> */}
            <Route path="/solar" element={<Solar/>} />
            <Route path="/earn" element={<Earningz/>} />
            <Route path="/rpcapi" element={<RpcApif/>} />
            <Route path="/pacman" element={<Pacman/>} />
            </Routes>
        <RightSidebar />
      </Router>
      </Div>
   
  );
}
export default Dapp;



const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;
