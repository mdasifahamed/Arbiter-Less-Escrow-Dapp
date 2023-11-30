import React from 'react'

const TransferBySeller = ({
    transferbyOwner,
}) => {
  return (
      <>
          <div className="w-96 h-32  shadow-2xl rounded-md ml-56 flex flex-col items-center gap-2">
              <div>
                  <h1 className="text-2xl font-bold">Transfer Ownership</h1>
              </div>
              <div>
                  <h1 className="text-base">Only Seller Can Transfer Ownership </h1>
              </div>

              <div>
                  <button className="w-40 h-8 bg-blue-500 text-sm rounded-md text-white" onClick={transferbyOwner}>Transfer</button>
              </div>

          </div>
    </>
  )
}

export default TransferBySeller