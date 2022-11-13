from brownie import AdvancedCollectible, accounts, config, network
from scripts.helpful_script import get_breed, fund_advanced_collectible
import time
import os
from pathlib import Path
from dotenv import load_dotenv
import json
from metadata import sample_metadata
import requests

load_dotenv()
os.environ["UPLOAD_IPFS"] = "true"
token_uri = ""


def main():
    for i in range(1):
        creating_collectibe()


def creating_collectibe():
    dev = accounts.add(config["wallets"]["from_key"])
    print(dev)
    advanced_collectible = AdvancedCollectible[
        len(AdvancedCollectible) - 1
    ]  # most recent deployment
    # fund_advanced_collectible(advanced_collectible.address)
    # print("sending link done")
    transaction = advanced_collectible.createCollectible("None", {"from": dev})
    print("Waiting on second transaction...")
    # wait for the 2nd transaction
    transaction.wait(2)
    requestId = transaction.events["RequestedCollectible"]["requestId"]
    token_id = advanced_collectible.requestIdToTokenId(requestId)
    breed = get_breed(advanced_collectible.tokenIdToBreed(token_id))
    number_of_advanced_collectibles = advanced_collectible.tokenCounter()
    print(
        "The number of tokens you've deployed is: "
        + str(number_of_advanced_collectibles)
    )
    write_metadata(number_of_advanced_collectibles, advanced_collectible)
    allotingTokenUri(number_of_advanced_collectibles - 1)
    print("NO of tokens created are {}".format(number_of_advanced_collectibles))
    print("DREX no  of tokenId {} is {}".format(token_id, breed))
    return token_uri


# this function returns the token uri --> call this to get the token uri


def write_metadata(token_id, nft_contract):
    collectible_metadata = sample_metadata.metadata_template
    breed = get_breed(nft_contract.tokenIdToBreed(token_id))
    metadata_file_name = (
        "./metadata/{}/".format("rinkeby") + str(token_id) + "-" + breed + ".json"
    )
    print(metadata_file_name)  # newly added line ----
    if Path(metadata_file_name).exists():
        print("{} already found, delete it to overwrite!".format(metadata_file_name))
    else:
        print("Creating Metadata file: " + metadata_file_name)
        collectible_metadata["name"] = get_breed(nft_contract.tokenIdToBreed(token_id))
        collectible_metadata[
            "description"
        ] = "This NFT represents a share of ownership in a pilot solar plant located in Guyaquil, Ecuador"
        image_to_upload = None
        if os.getenv("UPLOAD_IPFS") == "true":
            image_path = "./img/{}.jpg".format("drexnft")
            image_to_upload = upload_to_ipfs(image_path)
        collectible_metadata["image"] = image_to_upload
        with open(metadata_file_name, "w") as file:
            json.dump(collectible_metadata, file)
        if os.getenv("UPLOAD_IPFS") == "true":
            token_uri = str(upload_to_ipfs(metadata_file_name))


# curl -X POST -F file=@metadata/rinkeby/0-SHIBA_INU.json http://localhost:5001/api/v0/add


def upload_to_ipfs(filepath):
    with Path(filepath).open("rb") as fp:
        image_binary = fp.read()
        ipfs_url = (
            os.getenv("IPFS_URL") if os.getenv("IPFS_URL") else "http://localhost:5001"
        )
        response = requests.post(ipfs_url + "/api/v0/add", files={"file": image_binary})
        ipfs_hash = response.json()["Hash"]
        filename = filepath.split("/")[-1:][0]
        image_uri = "https://ipfs.io/ipfs/{}?filename={}".format(ipfs_hash, filename)
        print(image_uri)
        return image_uri
    return None


# drex_meta_dic = {
#     "DREX1": "https://ipfs.io/ipfs/QmPSvV47hgs8PcfjzUdDfgga5dwQCLA5N9zSP8bxCB7RtA?filename=0-DREX1.json",
#     "DREX3": "https://ipfs.io/ipfs/QmWDZd4V3VigGJfNCPzMaMwCn1N2QMtuVaRpKR7kGkLpsL?filename=0-DREX1.json",
#     "DREX2": "https://ipfs.io/ipfs/QmWDZd4V3VigGJfNCPzMaMwCn1N2QMtuVaRpKR7kGkLpsL?filename=0-DREX1.json",
# }

OPENSEA_FORMAT = "https://testnets.opensea.io/assests/rinkeby/{}/{}"


def allotingTokenUri(token_id):
    print("Working on " + network.show_active())
    advanced_collectible = AdvancedCollectible[len(AdvancedCollectible) - 1]
    number_of_advanced_collectibles = advanced_collectible.tokenCounter()
    print(
        "The number of tokens you've deployed is: "
        + str(number_of_advanced_collectibles)
    )
    breed = get_breed(advanced_collectible.tokenIdToBreed(token_id))
    if not advanced_collectible.tokenURI(token_id).startswith("https://"):
        print("Setting tokenURI of {}".format(token_id))
        set_tokenURI(token_id, advanced_collectible, token_uri)
    else:
        print("Skipping {}, we already set that tokenURI!".format(token_id))


def set_tokenURI(token_id, nft_contract, tokenURI):
    dev = accounts.add(config["wallets"]["from_key"])
    nft_contract.setTokenURI(token_id, tokenURI, {"from": dev})
    print(
        "Awesome! You can view your NFT at {}".format(
            OPENSEA_FORMAT.format(nft_contract.address, token_id)
        )
    )
