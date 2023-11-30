// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Seller {
    address public owner;
    address public buyerContract;

    constructor(){
        
        owner = msg.sender;
    }

    modifier onlySeller(){
        require(msg.sender == owner,"Only Seller Can Call This" );
        _;
    }


    function transferOwnership(address _newOwner) external payable {
        require(msg.sender == buyerContract, "Not  A Contract Owner");
        owner = _newOwner;
    
    }


    function setBuyerContract(address _buyer) onlySeller external{
        buyerContract = _buyer;
    }

}