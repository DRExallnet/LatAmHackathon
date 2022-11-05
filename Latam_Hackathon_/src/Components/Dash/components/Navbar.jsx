import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import {web3Accounts, web3Enable} from "@polkadot/extension-dapp";
import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
function Navbar() {
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
    const [open, setOpen] = useState(false);
    const parentRef = useRef();
  
    useEffect(() => {
      if (parentRef.current) {
        autoAnimate(parentRef.current);
      }
    }, [parentRef]);
  
    const showMore = () => setOpen(!open);

  return (
    <Nav>
      <h2>Overview</h2>
      <div className="px-2 cursor-pointer py-1 border-2 border-gray-200 w-[400px] rounded-lg" ref={parentRef}>
        <div>
          <span>Wallet</span>
          <BiChevronDown onClick={showMore}/>
        </div>
        {open && (
          <p className="p-2 italic">
            {
            error && <div>Error: {error}</div>
          }
          {
            accounts.map(account => <div>{account.address }</div>)
          }
          </p>
        )}
      </div>
    </Nav>
  );
}

    



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 2rem;
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0;
    .timeline {
      gap: 1rem;
    }
  }
`;

export default Navbar;
