// { /*<div className="mt-8 pt-4 pb-2 w-full flex flex-row items-start justify-between gap-8"></div>  <Loading></Loading>* /}

import React, { useState } from 'react'
import Loading from './Loading'
import BuyerContractCreate from './BuyerContractCreate';
import SellerContract from './SellerContract';
import BuyerContract from './BuyerContract';
import SellerConOperation from './SellerConOperation';
import DeploySellerContract from './DeploySellerContract';
import GetOwnerShip from './GetOwnerShip';
import NewOwnership from './NewOwnership';
import TransferBySeller from './TransferBySeller';
import ApproveByBuyer from './ApproveByBuyer';
import { Usemycontext } from '../MyContext';
// import Seller from './artifacts/contracts/Seller.sol/Seller.json'


export const Home = () => {
    const {
        newBCon,
        newSCon,
        addBuyer, 
        sellerAddres,
        sellerContractAddres,
        contractSellValue,
        createSellingContract,
        createbuyerContract,
        buyerContractAddress,
        addBuyerContarctToSeller,
        buyerAddress,
        SetSellerAndContract,
        getApproveByBuyer,
        approveByBuyer,
        getContractaAndSeller,
        transfer,
        transferBySeller,
        buyerContracValue,
        newSellerContractOwner,

    } = Usemycontext();


  return (
    <>
      <div className="mt-8 pt-4 pb-2 w-full flex flex-row items-start justify-between gap-8">

        {newBCon ? (

          getContractaAndSeller ? (

            approveByBuyer ? (

              transferBySeller ?
               (<NewOwnership
               
                ></NewOwnership>
               ):(
                <TransferBySeller transferbyOwner={()=>{
                  transfer();
                }}></TransferBySeller>
              )

            ) : (

              <ApproveByBuyer approve={()=>{
                getApproveByBuyer();
              }}></ApproveByBuyer>
            )
          ) : (
            (<GetOwnerShip setSellerAndContract={() => {
              SetSellerAndContract();
            }} ></GetOwnerShip>)
          )
        ) : (
          <BuyerContractCreate handelCreateB={() => {
            createbuyerContract();
          }}></BuyerContractCreate>
        )}
        {(newSCon?
          (<SellerContract 
            contractaddress={sellerContractAddres}
            selleraddress ={sellerAddres}
            contractValue = {contractSellValue}
            >
            </SellerContract>
          ):
          (<DeploySellerContract 
            handleCreateS={()=>{
            createSellingContract();
          }}>

          </DeploySellerContract>)
        )}

      

      </div>

      <div className="mt-8 pt-4 pb-2 w-full flex flex-row items-start justify-between gap-8">
       {
        newSCon ? (
          addBuyer ? (
            <div className='ml-72 text-2xl font-bold'>Successfully Added Buyer</div>
          ) : (
            <SellerConOperation handleAddBuyer={ async ()=>{
              addBuyerContarctToSeller(buyerContractAddress);
            }} ></SellerConOperation>
          )
        ) : (
          <div></div>
        )
       }
        {
          newBCon ? (<BuyerContract 
            buyerContractAddress={buyerContractAddress}
            buyeradd = {buyerAddress}
            buyerContracValue={buyerContracValue}
            ></BuyerContract>)
          :(<div></div>)
        }
      </div>
    </>
  )
}
export default Home;

