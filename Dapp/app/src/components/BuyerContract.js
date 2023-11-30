import React from 'react'

import eth from './images/ethereum.png';

const BuyerContract = ({buyerContractAddress,buyerContracValue,buyeradd}) => {


  return (
    <>
      <div class="w-96 h-56 shadow-2xl rounded-md  mr-56 flex flex-col items-center gap-2 ">
        <div>
          <h1 class="text-xl font-bold">New Buyer Contract Created !</h1>
        </div>
        <div>
          <h1 class="text-base">Buyer Contract Address</h1>

        </div>
        <div class="flex flex-row items-center justify-center gap-1">
          <h1 class="text-sm" id={'buyerCon'} >{buyerContractAddress}</h1>
         
        </div>
        <div>
        <h1 class="text-base">Buyer Address</h1>

      </div>
        <div class="flex flex-row items-center justify-center gap-1">
        <h1 class="text-sm" id={'buyerb'} >{buyeradd}</h1>
      </div>
        <div>
          <h1 class="text-base">Contract Balance</h1>
        </div>
        <div class="flex flex-row items-center justify-center gap-1">
          <img src={eth} alt="" width={"14px"} height={"14px"} />
          <h1 class="text-base">{buyerContracValue} ETH</h1>
        </div>
      </div>
    </>
  )
}

export default BuyerContract