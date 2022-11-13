from brownie import accounts, network, config, AdvancedCollectible, DRExToken, Client
from scripts.helpful_script import fund_advanced_collectible
from dotenv import load_dotenv
import os
import time

erc20 = DRExToken[-1]
contract_to_transfer = AdvancedCollectible[-1]


def main():
    dev = accounts.add(config["wallets"]["from_key"])
    client = Client[-1]
    print("client address is {}".format(client))
    client.requestVolumeData({"from": dev})
    time.sleep(2 * 60)
    print("calling the volume function")
    time.sleep(4)
    curr_value = client.volume()
    print(curr_value)
    while True:
        print("GOING THE LOOP")
        client.requestVolumeData({"from": dev})
        time.sleep(2 * 60)
        new_value = client.volume()
        print(new_value)
        energy_produced = new_value - curr_value
        print(energy_produced)

        # to transfer the drex tokens from drexToken pool to the current collection
        erc20.tranferingfunds(contract_to_transfer, energy_produced, {"from": dev})
        print(erc20.balanceOf(contract_to_transfer))
        time.sleep(2 * 60)

        # to update the erc20 balance for each collection
        contract_to_transfer.updateERC20Balance({"from": dev})
        curr_value = new_value
