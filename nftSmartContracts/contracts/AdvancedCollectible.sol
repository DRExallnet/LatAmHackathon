// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AdvancedCollectible is ERC721 {
    enum Breed {
        DREX1
    }
    // add other things
    IERC20 private _token;
    mapping(uint256 => address) public requestIdToSender;
    mapping(uint256 => string) public requestIdToTokenURI;
    mapping(uint256 => Breed) public tokenIdToBreed;
    mapping(uint256 => uint256) public requestIdToTokenId;
    mapping(uint256 => address) public tokenToOwner;
    mapping(uint256 => uint256) public participationValue;
    mapping(address => uint256) public ownerToValue;
    address[] public previousContracts;
    event RequestedCollectible(uint256 indexed requestId);
    event TransferSent(address _destAddr, uint256 _amount);

    // New event from the video!
    event ReturnedCollectible(uint256 indexed requestId, uint256 randomNumber);
    uint256 public totalTokenTransfered; //amount of drex tokens transfered till date
    uint256 public tokenCounter;
    uint256 public fParticipation;
    uint256 public RequestId; //hardcoded value
    uint256 public randomNumber; //harcoded value

    constructor(IERC20 erc_token_address, address[] memory prevContracts)
        public
        ERC721("DREX", "DRx")
    {
        previousContracts = prevContracts;
        _token = erc_token_address;
        RequestId = 1;
        randomNumber = 10;
        tokenCounter = 0;
    }

    function createCollectible(string memory tokenURI) public {
        uint256 requestId = RequestId; //requestRandomness(keyHash, fee);
        requestIdToSender[requestId] = msg.sender;
        requestIdToTokenURI[requestId] = tokenURI;
        fulfillRandom(requestId, randomNumber);
        RequestId = RequestId + 1;
        randomNumber = randomNumber + 1;
        emit RequestedCollectible(requestId);
    }

    function fulfillRandom(uint256 requestId, uint256 RandomNumber) public {
        address DrexOwner = requestIdToSender[requestId];
        string memory tokenURI = requestIdToTokenURI[requestId];
        uint256 newItemId = tokenCounter;
        _safeMint(DrexOwner, newItemId);
        _setTokenURI(newItemId, tokenURI);
        Breed breed = Breed(RandomNumber % 1);
        tokenIdToBreed[newItemId] = breed;
        requestIdToTokenId[requestId] = newItemId;
        tokenToOwner[newItemId] = DrexOwner; //no of tokens each nft holds or the amount of token user can mint
        tokenCounter = tokenCounter + 1;
        emit ReturnedCollectible(requestId, RandomNumber);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }

    //correct this functions --> find new function for each contract
    function participationCalculation() public {
        require(previousContracts.length > 0, "this is the first contract");

        //needs another check to remove the first contract after 25 years or after 25 contracts have been created

        uint256 totalContracts = previousContracts.length + 1;
        uint256 totalNfts = totalContracts * 20; //no of nfts per collection is a variable and find a way to make it variable
        uint256 fEmission = 20 / totalNfts; //decide how to deal with floating points --> need to be different for each collection
        uint256 fYear = 1 / totalContracts;
        fParticipation = (fEmission + fYear) / 2;
    }

    function participationReturns() public {
        uint256 erc20balance = _token.balanceOf(address(this));
        require(
            _token.balanceOf(address(this)) > 100,
            "balance not sufficient"
        );
        uint256 costTosend = (erc20balance * fParticipation) / 100;
        for (uint256 holder = 0; holder < previousContracts.length; holder++) {
            address to = previousContracts[holder];
            _token.transfer(to, costTosend);
            erc20balance -= costTosend;
            // event for transfering funds from token pool to particular contract
            emit TransferSent(to, costTosend);
        }
    }

    function updateERC20Balance() public {
        uint256 erc20balance = _token.balanceOf(address(this));
        uint256 curr_balance_for_each_holder = erc20balance / (20);
        for (uint256 holder = 0; holder < tokenCounter; holder++) {
            address token_owner = tokenToOwner[holder];
            ownerToValue[token_owner] += curr_balance_for_each_holder;
        }
    }

    function transferERC20(address payable to, uint256 amount) public {
        uint256 owner_balance = ownerToValue[to];
        require(
            amount <= owner_balance,
            "balanced exceded the allocated amount"
        );
        totalTokenTransfered += amount;
        ownerToValue[to] -= amount;
        _token.transferFrom(address(this), to, amount);
        emit TransferSent(to, amount);
    }
}
