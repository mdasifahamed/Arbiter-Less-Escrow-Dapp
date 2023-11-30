import React, { createContext,useContext, useState } from 'react'
import { Contract, ethers } from 'ethers';
import Seller from './artifacts/contracts/Seller.sol/Seller.json';
import Buyer from './artifacts/contracts/Buyer.sol/Buyer.json';


const MyContextP = createContext();

const MyContext = ({ children }) => {


    const [contractSellValue, setContractSellValue] = useState("");
    const [sellerAddres, setSellerAddres ] = useState("");
    const [sellerContractAddres, setSellerContractAddres ] = useState("");
    const [buyerContractAddress, setBuyerContractAddress] = useState("");
    const [buyerAddress, setBuyerAddress] = useState("");
    const [buyerContracValue, setBuyerContractValue] = useState("");
    const [newBCon, setNewBCon] = useState(false);
    const [newSCon, setNewSCon] = useState(false);
    const [addBuyer, setAddbuyer] = useState(false);
    const [newOnwer, setNewOwner] = useState("");
    const [approveByBuyer, setApproveByBuyer] = useState(false);
    const [getContractaAndSeller,steGetgetContractaAndSeller] =useState(false);
    const [transferBySeller , setTransferBySeller ] = useState(false)
    


    const createSellingContract = async () => {
        if (window.ethereum) {
            const AccountSeller = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const SellerContractOwner = signer.address;
            try {
                const contract = new ethers.ContractFactory(Seller.abi, Seller.bytecode);
                const sellerCon = await contract.connect(signer).deploy();
                setSellerContractAddres(await sellerCon.getAddress());
            } catch (error) {
                console.log(error);
            }

            setSellerAddres(SellerContractOwner);
            setNewSCon(true);



        }
        else {

            alert("Please Connect metamask first");
        }
    }
    const createbuyerContract = async () => {
        if (window.ethereum) {
            const account = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            try {
                const contract = new ethers.ContractFactory(Buyer.abi, Buyer.bytecode);
                const buyer = await contract.connect(signer).deploy({ value: ethers.parseEther(buyerContracValue) });
                setBuyerContractAddress(await buyer.getAddress());

            } catch (error) {
                console.log(error);
            }

            setBuyerAddress(await signer.address);

            setNewBCon(true);

        } else {
            alert("Connect metemask First")
        }
    }
    const addBuyerContarctToSeller = async (buyerContractAddress) => {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            try {
                const contract = new ethers.Contract(sellerContractAddres, Seller.abi, signer);
                const trx = await contract.connect(signer).setBuyerContract(buyerContractAddress);
                await trx.wait();
              
                


            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
            alert("Buyer Contract Address Added")
            setAddbuyer(true);
        

        }
        else {
            alert("Conncet TO MetaMask First")
        }
    }

    const SetSellerAndContract = async () => {

        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const buyerContract = new ethers.Contract(buyerContractAddress, Buyer.abi, signer);

            try {
                const trx = await buyerContract.connect(signer).addSellerToPayandContractAddress(sellerContractAddres, sellerAddres);
                await trx.wait();
              
         
             

            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }

            const sellerc = new ethers.Contract(sellerContractAddres,Seller.abi,signer);
            const sellerowner = await sellerc.owner();
      
        } else {
            alert("Connetc metaMask First")
        }
        alert("Seller Address And Contract Addres Set");
        steGetgetContractaAndSeller(true)
    }

    const getApproveByBuyer = async()=>{

        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const buyerContract = new ethers.Contract(buyerContractAddress, Buyer.abi, signer);

            try {
                const trx = await buyerContract.connect(signer).approveTobuy();
                await trx.wait();
           
                

            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
            alert("Approval Done")
            setApproveByBuyer(true);
       
           

        } else {
            alert("Connetc metaMask First")
        }
    
    }

    const transfer = async()=>{
        if(window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const buyeC = new ethers.Contract(buyerContractAddress, Buyer.abi,signer);
            const sellerc = new ethers.Contract(sellerContractAddres,Seller.abi,signer);
            const sellerowner = await sellerc.owner();
         
            console.log('Previous Seller Contract Owner');
            console.log(sellerowner);
            console.log('====================================');
            try {
               const trx = await buyeC.connect(signer).getOwnership();
               trx.wait();

            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
                
            }

            

            try {
                
                alert("Transfer Done");
                const sellerc = new ethers.Contract(sellerContractAddres,Seller.abi,signer);
                const sellerowner = await sellerc.connect(signer).owner();
            
                console.log('Curretnt Seller Contract Owner');
                console.log(sellerowner);
                console.log('====================================');
                setNewOwner(sellerowner);
                setTransferBySeller(true);
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        
        else{

            alert ("Connect Metamask First");
        }
        
    }



    return (

        <MyContextP.Provider value={{
            newBCon,
            newSCon,
            addBuyer,
            sellerAddres,
            sellerContractAddres,
            contractSellValue,
            createSellingContract,
            setContractSellValue,
            createbuyerContract,
            buyerContractAddress,
            buyerAddress,
            setBuyerContractValue,
            SetSellerAndContract,
            addBuyerContarctToSeller,
            newOnwer,
            setSellerAddres,
            setSellerContractAddres,
            getApproveByBuyer,
            approveByBuyer,
            getContractaAndSeller,
            transfer,
            transferBySeller,
            buyerContracValue,



        }}>
            {children}
        </MyContextP.Provider>

    )
}



export default MyContext
export  function Usemycontext(){
    return useContext(MyContextP);
}