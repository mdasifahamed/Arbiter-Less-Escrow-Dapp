import React from 'react'

const ApproveByBuyer = ({
    approve,
   
}) => {
  return (
    <>
    <div className="w-96 h-32 pt-2 shadow-2xl rounded-md ml-56 flex flex-col items-center gap-2">
    <div>
        <h1 className="text-2xl font-bold ">Approve To Buy</h1>
    </div>
    <div>
        <h1 className="text-base">Only Buyer Can Approve/Cancel</h1>
    </div>
    <div className="flex flex-row items-center gap-2">
        <div>
            <button className="w-28 h-8 bg-blue-500 text-sm rounded-md text-white" onClick={approve}>Approve To Buy</button>
        </div>
        <div>
            <button className="w-28 h-8 bg-blue-500 text-sm rounded-md text-white" onClick={()=>{
                window.location.reload();
            }}>Cancel To Buy</button>
        </div>
    </div>
    

</div>
    </>
  )
}

export default ApproveByBuyer