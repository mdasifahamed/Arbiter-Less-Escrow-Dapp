import React from 'react'
import copy from './images/copy.png';
import eth  from './images/ethereum.png';




const SellerContract = ({contractaddress,selleraddress, contractValue}) => {

 

  const copyContractadd = () =>{

    const contractadd = document.getElementById("contractadd");
   
    navigator.clipboard.writeText(contractaddress)

  }

  const copyAccount =()=>{
    const Accadd = document.getElementById('owneradd');
    navigator.clipboard.writeText(selleraddress);
    
  } 


  return (
    <>
      <div class="w-96 h-56 shadow-2xl rounded-md  mr-56 flex flex-col items-center gap-2 ">
        <div>
          <h1 class="text-2xl font-bold">Contract For Sale</h1>
        </div>
      
      <div>
        <h1 class="text-base">Contract To Buy </h1>
      </div>
      <div class="flex flex-row items-center justify-center gap-1">

        <h1 class="text-sm" id={"contractadd"}>{contractaddress}</h1>
        <button onClick={copyContractadd}>
          <img src={copy} alt="" width={"14px"} height={"14px"} />
        </button>
      </div>

      <div>
        <h1 class="text-base">Contract Seller/Owner Address</h1>
      </div>

      <div class="flex flex-row items-center justify-center gap-1">

        <h1 class="text-sm" id={"owneradd"}>{selleraddress}</h1>
        <button onClick={copyAccount}>
          <img src={copy} alt="" width={"14px"} height={"14px"} />
        </button>
      </div>

      <div>
        <h1 class="text-base">Contract Selling Value</h1>
      </div>
      <div class="flex flex-row items-center justify-center gap-1">
        <img src={eth} alt="" width={"14px"} height={"14px"} />
        <h1 class="text-base">{contractValue}ETH</h1>
      </div>


    </div>






    </>
  )
}

export default SellerContract