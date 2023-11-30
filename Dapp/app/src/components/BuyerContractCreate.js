import React from 'react'
import { Usemycontext } from '../MyContext';

const BuyerContractCreate = ({
  handelCreateB,
}) => {

  const {setBuyerContractValue} = Usemycontext();
  return (
    <>
      <div className="w-96 h-40  shadow-2xl rounded-md ml-56 flex flex-col items-center gap-2">
        <div>
          <h1 className="text-2xl font-bold">Create Contract To Buy</h1>
        </div>
        <div>
          <h1 className="text-base">Contract Value To Be Stored In Contract</h1>
        </div>
        <div>
          <input type="text" className="outline:none border border-2 rounded-md w-72"
            placeholder="Enter Contract Value"
            onChange={(e)=>{
              setBuyerContractValue(e.target.value)
            }}/>
        </div>
        <div>
          <button className="w-40 h-8 bg-blue-500 text-sm rounded-md text-white"
          onClick={handelCreateB}>Create Contract To Buy</button>
        </div>

      </div>

    </>
  )
}

export default BuyerContractCreate