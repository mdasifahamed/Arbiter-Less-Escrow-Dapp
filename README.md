# Arbiter Less Escrow-Dapp

Arbiter Less Escrow-Dapp is a decentralized application (Dapp) designed to facilitate secure and decentralized asset exchanges between parties through smart contracts, eliminating the need for a third-party arbiter. This Dapp serves as a conceptual framework that can be tailored and enhanced based on specific business logic.

## How It Works

Imagine two parties, where **Party A** possesses valuable assets with a high monetary value and intends to sell them. Meanwhile, **Party B** expresses interest in acquiring **Party A**'s assets and is willing to exchange them for their monetary assets. Both parties prioritize the security of their assets during the exchange.

This objective is achieved through the utilization of **Smart Contracts** within the **Arbiter Less Escrow-Dapp**. Here's a step-by-step guide:

1. **Party A** initiates the process by creating a smart contract containing the details of the assets they wish to sell.

2. Simultaneously, **Party B** creates their own contract, locking in the value and ensuring that **Party A** will be duly compensated during the transfer.

3. After creating the contract, **Party B** provides the **Contract Address** to **Party A**. Notably, only the contract address set by the **Party A** owner to their contract is permitted to execute the ownership transfer; no other address is authorized.

4. Subsequently, **Party A** adds their address and the **Contract Address** of **Party B** to the respective sections in **Party B**'s contract.

5. **Party B** then approves the ownership transfer, indicating their intention to take control of **Party A**'s contract.

6. Following the proper setup, **Party A** executes the transfer from **Party B**'s contract, completing the transfer of ownership. Additionally, the agreed-upon amount is transferred to **Party A**'s address. The transfer functionalities of **Party B** also mandate approval before execution, ensuring security.

If these steps are diligently followed, the asset transfer will be successful.

## Running Locally

Ensure that **MetaMask** is installed in your browser to run the **Dapp** successfully.

1. Clone this repository: `git clone https://github.com/mdasifahamed/Arbiter-Less-Escrow-Dapp.git`

There are two main folders: **Dapp**, housing the Dapp, and **Dapp Test**, dedicated to comprehensive testing using **Hardhat**, **Chai**, and **Ethereum Waffle**.

### Running the Dapp

1. Navigate to the root directory: `cd Dapp`
2. Install dependencies for **Hardhat**: `npm i`
3. Move to the app directory: `cd app`
4. Install frontend dependencies: `npm i`

To utilize the Hardhat Local Blockchain Network or any Testnet via Metamask, refer to [this guide](https://www.web3.university/article/how-to-build-a-react-dapp-with-hardhat-and-metamask).

For a local network, run `npx hardhat node` from the **Dapp** root.

Launch the Dapp locally with `npm start`. Open the provided URL (e.g., **http://localhost:3000**) in a browser with Metamask installed.

### Testing

1. Go to the project root: `cd Dapp Test`
2. Install test dependencies: `npm i`
3. Run tests: `npx hardhat test`

## Language And Tools Used

- **Solidity** for Contracts.
- **React** for Frontend.
- **Chai** and **Ethereum-Waffle** for Contract Testing.
