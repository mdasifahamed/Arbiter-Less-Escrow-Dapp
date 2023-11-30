import React from 'react'
import { Usemycontext } from '../MyContext'

const DeploySellerContract = ({
  handleCreateS,
}) => {
   
  const {setContractSellValue}  = Usemycontext();

  return (
    <>

      <div className="w-96 h-40  shadow-2xl rounded-md mr-56 flex flex-col items-center gap-2">
        <div>
          <h1 className="text-2xl font-bold">Create Contract To Sell</h1>
        </div>
        <div>
          <h1 className="text-base">Contract Value For Selling </h1>
        </div>
        <div>
          <input type="text" className="outline:none border border-2 rounded-md w-72"
            placeholder="Enter Contract Selling Value in ETH"
            onChange={(e)=>{
              setContractSellValue(e.target.value)
            }}/>
        </div>
        <div>
          <button className="w-40 h-8 bg-blue-500 text-sm rounded-md text-white"
          onClick={handleCreateS}>Create Contract To Sell</button>
        </div>

      </div>
    </>
  )
}

export default DeploySellerContract