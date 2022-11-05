import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import React from "react";
import {ApiPromise, WsProvider} from '@polkadot/api';
import {useState} from "react";
import {web3Accounts, web3Enable, web3FromSource} from '@polkadot/extension-dapp';
import {
  Tabs,
  Card,
  Row,
  Col,
  Timeline,
  Button,
  Badge,
  
  notification,
  
} from 'antd';

import {LoadingOutlined, CloseCircleOutlined, WarningOutlined, SendOutlined, SyncOutlined} from '@ant-design/icons';
function Network() {
  const [api, setApi] = useState(null);
  const [transferToAccount, setTransferToAccount] = useState(null);
  const [toAccountBalance, setToAccountBalance] = useState(-1);
  const [transferFromAccount, setTransferFromAccount] = useState(null);
  const [searchAddress, setSearchAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [nonce, setNonce] = useState('');
  const [chain, setChain] = useState('');
  const [block, setBlock] = useState('');
  const [amountToSend, setAmountToSend] = useState(0);
  const [validators, setValidators] = useState([]);
  const [lastBlockHash, setLastBlockHash] = useState('');
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [verifyingToAccountLoading, setVerifyingToAccountLoading] = useState(false);
  const [accountBalancesLoading, setAccountBalancesLoading] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [error, setError] = useState(null);

  const [accounts, setAccounts] = useState([]);
  const openNotification = (message, description) => {
    notification.open({
        message,
        description
    });
};

const verifyToAddress = async (address) => {
  if (address.length > 30) {
      setTransferToAccount(address);
      setVerifyingToAccountLoading(true);
      try {
          const {data: {free: accountBalance}} = await api.query.system.account(address);
          setToAccountBalance(accountBalance);
          setError(null);
      } catch (e) {
          setError(`Invalid receiver Address: ${e.message}`);
          setToAccountBalance(-1);
      }
  } else {
      setToAccountBalance(-1);
  }
  setVerifyingToAccountLoading(false)
};
const extensionSetup = async (api) => {
  const extensions = await web3Enable('Polk4NET');
  if (extensions.length === 0) {
      openNotification('PolkadotJS extension missing', 'Please install PolkadotJS extension and add your wallets to unlock all features!');
      return;
  }
  const allAccounts = await web3Accounts();
  setAccounts(allAccounts);
  await loadBalances(allAccounts, api);
};
const loadBalances = async (allAccounts, api) => {
  setAccountBalancesLoading(true);
  try {
      const accountsWithBalances = [];
      for (let account of allAccounts) {
          const balance = (await api.query.system.account(account.address)).data.free;
          accountsWithBalances.push({
              address: account.address,
              meta: account.meta,
              balance
          });
      }
      setAccounts(accountsWithBalances)
  } catch (e) {
      setError(`Error fetching balances for wallets: ${e.message}`)
  }
  setAccountBalancesLoading(false);
};
const setup = async () => {
  try {
      const wsProvider = new WsProvider('wss://rpc.polkadot.io'); 
      const api = await ApiPromise.create({provider: wsProvider});
      const chain = await api.rpc.system.chain();
      setChain(`${chain}`);
      await api.rpc.chain.subscribeNewHeads((lastHeader) => {
          setBlock(`${lastHeader.number}`);
          setLastBlockHash(`${lastHeader.hash}`);
      });
      const validators = await api.query.session.validators();
      if (validators && validators.length > 0) {
          setValidators(validators);
      }
      setValidators(validators.map(v => {
          return {
              address: `${v}`,
          }
      }));
      setApi(api);
      setError(null);
      await extensionSetup(api);
  } catch (e) {
      setError(e.message);
  }
  setLoading(false);
};        
const connectExtensionContainer = <div className="card-layout-content-white">
<Button onClick={extensionSetup} type="primary">Connect PolkaJS extension to this
    platform.</Button>
</div>;

  return (
    <Nav>
      <h2>Network Block Information</h2>
      <Tabs>
      <Row gutter={16} style={{paddingTop: 10}}>
            <Col span={24}>
                <Card>
                    <Timeline pending="Last block...">
                        <Timeline.Item>{block} - {lastBlockHash}</Timeline.Item>
                    </Timeline>
                </Card>
            </Col>
        </Row>
        <Badge.Ribbon text="DREx Test Network [Expect Chaos]">
            <Card style={{ backgroundColor: 'black', color: 'white', fontStyle: 'bold'}}>wss://canvas.polk4.net</Card>
        </Badge.Ribbon>;
    

      </Tabs>
    </Nav>
  );


}

export default Network;

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


