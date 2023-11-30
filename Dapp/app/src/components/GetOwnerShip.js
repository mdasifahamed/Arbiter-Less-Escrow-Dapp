import React from 'react'

import { Usemycontext } from '../MyContext'

const GetOwnerShip = ({
  setSellerAndContract,
}) => {
  const {setSellerContractAddres,setSellerAddres} = Usemycontext()

  return (
    <>
      <div class="w-96 h-64  shadow-2xl rounded-md ml-56 flex flex-col  items-center gap-2">
        <div>
          <h1 class="font-bold">Set Seller Address And Contract Address</h1>
        </div>
        <div>
          <h1 class="text-base">Contract Address To Buy</h1>
        </div>
        <div>
          <input type="text" class="outline:none border border-2 rounded-md w-72"
            placeholder="Enter Contract Address To Buy"
            onChange={(e)=>{
              e.preventDefault();
              setSellerContractAddres(e.target.value)
            }}/>
        </div>

        <div>
          <h1 class="text-base">Contract Seller/Owner Address</h1>
        </div>

        <div>
          <input type="text" class="outline:none border border-2 rounded-md w-72"
            placeholder="Enter Contract Seller Address"
            onChange={(e)=>{
              e.preventDefault();
              setSellerAddres(e.target.value);
            }}/>
        </div>

        <div>
          <button class="w-20 h-8 bg-blue-500 text-sm rounded-md text-white" onClick={setSellerAndContract}>Set</button>
        </div>

      </div>
    </>
  )
}

export default GetOwnerShip
