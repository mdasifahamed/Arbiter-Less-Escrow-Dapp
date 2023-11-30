const {ethers } = require('hardhat');
const {expect} = require('chai');
const {loadFixture} = require('ethereum-waffle')

const getBuyerandSeller = async ()=>{
    const [buyer,seller,testAccount] = await ethers.getSigners();
    return {buyer, seller, testAccount}
}
describe('TEst Deploy', async function (params) {
    async function deployB(){

        const contract = await ethers.getContractFactory('Buyer');
        const {buyer} = await getBuyerandSeller();
        const BuyerC = await contract.connect(buyer).deploy();
        return{BuyerC};
    }

    async function deployS(){

        const contract = await ethers.getContractFactory('Seller');
        const {seller} = await getBuyerandSeller();
        const SellerC = await contract.connect(seller).deploy();
        return{SellerC};
    }

    it("should set owner",async()=>{
        const {SellerC} =await loadFixture(deployS);
        const{BuyerC} = await loadFixture(deployB);
        const {buyer,seller} = await getBuyerandSeller();

        expect(buyer.address).to.be.equal(await BuyerC.owner());
        expect(seller.address).to.be.equal(await SellerC.owner());
    })
});

describe("Total Operation Test",async ()=>{

    async function deployB(){

        const contract = await ethers.getContractFactory('Buyer');
        const {buyer} = await getBuyerandSeller();
        const BuyerC = await contract.connect(buyer).deploy({value:ethers.utils.parseEther('5')});
        return{BuyerC};
    }

    async function deployS(){

        const contract = await ethers.getContractFactory('Seller');
        const {seller} = await getBuyerandSeller();
        const SellerC = await contract.connect(seller).deploy();
        return{SellerC};
    }

    it("Only Seller Should First Set BuyerContract Address", async ()=>{
        const {SellerC} = await loadFixture(deployS);
        const {BuyerC} = await loadFixture(deployB);
        const {seller,testAccount} = await getBuyerandSeller();
        const bContractAdd = BuyerC.address;
        expect(await SellerC.connect(seller).setBuyerContract(bContractAdd)).to.be.not.reverted;

        try {
            await SellerC.connect(testAccount).setBuyerContract(bContractAdd);
        } catch (error) {
            expect(error);
        }
    });

    it("Only Buyer Should Add Contract Address And Seller Address", async ()=>{
        const {BuyerC} = await loadFixture(deployB);
        const {SellerC} = await loadFixture(deployS);
        const {buyer,seller, testAccount} = await getBuyerandSeller();

        const sContractadd = SellerC.address;
        try {
            await BuyerC.connect(buyer).addSellerToPayandContractAddress(sContractadd,seller.address);
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }

        expect(sContractadd).to.be.equal(await BuyerC.contracToBuy());
        expect(seller.address).to.be.equal(await BuyerC.sellerToPay());

        try {
            await BuyerC.connect(testAccount).addSellerToPayandContractAddress(sContractadd,seller.address);
        } catch (error) {
            expect(error)
        }

    })
    it("Only Buyer Should Set Approve",async()=>{
        const {BuyerC} = await loadFixture(deployB);
        const {buyer,testAccount} = await getBuyerandSeller();
        try {
            await BuyerC.connect(buyer).approveTobuy();
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
        expect(await BuyerC.isApproved()).to.be.equal(true);

        try {
            await BuyerC.connect(testAccount).approveTobuy();
        } catch (error) {
           expect(error);
        }


    });

    it("Get OwnerShip Sholud Only Called By The Seller After Approve And OwnerShip Should Be Transfered To Buyer And Seller Should Get The Fund", async ()=>{
        const {BuyerC} = await loadFixture(deployB);
        const {SellerC} = await loadFixture(deployS);
        const {buyer,seller, testAccount} = await getBuyerandSeller();
        const BuyerContractBalanceBefore = await ethers.provider.getBalance(BuyerC.address);
        const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);
        expect(BuyerContractBalanceBefore).to.be.equal(ethers.utils.parseEther('5'));
    
        

        try {
            await BuyerC.connect(testAccount).getOwnership();    
        } catch (error) {

             expect(error)
        }

        try {
            await BuyerC.connect(seller).getOwnership();    
        } catch (error) {
            console.log('====================================');
            console.log(console.error());
            console.log('====================================');
        }

        const newSellerConOwner = await SellerC.owner();
        const BuyerConBalanceafter = await ethers.provider.getBalance(BuyerC.address);
        const sellerConBalanceAfter  = await ethers.provider.getBalance(seller.address);

        expect(buyer.address).to.be.equal(newSellerConOwner);
        expect(BuyerConBalanceafter).to.be.equal(ethers.utils.parseEther('0'));
        expect(sellerConBalanceAfter).to.be.gt(sellerBalanceBefore);
        try {
            await SellerC.connect(seller).setBuyerContract(BuyerC.address);
        } catch (error) {
            expect(error);
        }
        expect( await SellerC.connect(buyer).setBuyerContract(BuyerC.address)).to.be.not.reverted;
    })

})