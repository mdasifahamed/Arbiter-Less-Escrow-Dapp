import React from 'react'
import { Usemycontext } from '../MyContext';


const NewOwnership = () => {
  const {sellerContractAddres,newOnwer} = Usemycontext()
  return (
    <>
      <div className="w-96 h-40 shadow-2xl rounded-md  ml-56 flex flex-col items-center gap-2 ">
        <div>
          <h1 className="text-xl font-bold">New Contract Owner!</h1>
        </div>
        <div>
          <h1 className="text-base">Sold Contract Address</h1>

        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <h1 className="text-sm">{sellerContractAddres}</h1>
        </div>
        <div>
          <h1 className="text-base">New Contract Owner</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <h1 className="text-sm">{newOnwer}</h1>
        </div>
      </div>
    </>
  )
}

export default NewOwnership