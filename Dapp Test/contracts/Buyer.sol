// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Buyer {

    address public  owner;
    address public contracToBuy;
    address public sellerToPay;
    bool public isApproved;

    constructor() payable {
        owner = msg.sender;
    }
    

    function getOwnership() external payable{
        require(msg.sender == sellerToPay ,"Cannot Called By You");
        require(isApproved==true,"It Has Not Been Aproved yet");
        (bool got,) = contracToBuy.call(abi.encodeWithSignature("transferOwnership(address)",owner));
        require(got, "failed to GetOWnerShip");
        (bool paid,) = payable (sellerToPay).call{value:address(this).balance}("");
        require(paid, "failed to Paid");
    }


    function addSellerToPayandContractAddress(address _contracToBuy, address _seller) external {
        require(msg.sender == owner, "Only Buyer Can Set Seller");
        sellerToPay = _seller;
        contracToBuy = _contracToBuy; 
    }

    function approveTobuy() external {
        require(msg.sender == owner, "Only Buyer Can Set Seller");
        isApproved = true;
    }
}
