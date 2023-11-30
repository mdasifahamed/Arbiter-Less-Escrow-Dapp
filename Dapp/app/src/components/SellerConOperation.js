import React from 'react'

const SellerConOperation = ({handleAddBuyer}) => {
  return (
   <>
      <div class="w-96 h-40 shadow-2xl rounded-md ml-56 flex flex-col items-center gap-2">
        <div>
          <h1 class="text-xl font-bold">Seller To Add Buyer Contract Address</h1>
        </div>
        <div>
          <h1 class="text-base">Buyer Contract Address</h1>
        </div>
        <div>
          <input type="text" class="outline:none border border-2 rounded-md w-72"
            placeholder="Enter Buyer Contract Address"/>
        </div>
        <div>
          <button class="w-28 h-8 bg-blue-500 text-sm rounded-md text-white" onClick={handleAddBuyer}>Add Buyer</button>
        </div>

      </div>
    </>
  )
}

export default SellerConOperation