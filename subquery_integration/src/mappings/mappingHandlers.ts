import { Approval, Transaction } from "../types";
import {
  FrontierEvmEvent,
  FrontierEvmCall,
} from "@subql/frontier-evm-processor";
import { BigNumber } from "ethers";
import { ApiPromise, WsProvider } from "@polkadot/api";


//const { ApiPromise, WsProvider } = require('@polkadot/api');
// Setup types from ABI
type TransferEventArgs = [string, string, BigNumber] & {
  from: string;
  to: string;
  value: BigNumber;
};
type ApproveCallArgs = [string, BigNumber] & {
  _spender: string;
  _value: BigNumber;
};

export async function handleFrontierEvmEvent(
  event: FrontierEvmEvent<TransferEventArgs>
): Promise<void> {
  
  //const provider = new WsProvider('wss://moonbeam-alpha.api.onfinality.io/public-ws');
  //const api = await ApiPromise.create({ provider });
  
  const blockhash = `0x37a5e65de3c034ba4994537d4fa23da8c608ed0a0a5952ce6117b430ed081a21`;
  //const b1 = await api.rpc.chain.getBlock(blockhash);
  /*const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);*/

  const transaction = new Transaction(event.transactionHash);

  transaction.value = BigInt(0);
  transaction.from = event.args.from;
  //transaction.from = b1;
  transaction.to = event.args.to;
  transaction.contractAddress = event.address;

  await transaction.save();
}

export async function handleFrontierEvmCall(
  event: FrontierEvmCall<ApproveCallArgs>
): Promise<void> {
  const approval = new Approval(event.hash);

  approval.owner = event.from;
  approval.value = event.args._value.toBigInt();
  approval.spender = event.args._spender;
  approval.contractAddress = event.to;

  await approval.save();
}
