This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

# ✈️ Flight Insurance DApp

## 🚀 Overview
The **Flight Insurance DApp** is a decentralized application (DApp) built on Ethereum that allows travelers to purchase flight insurance. If their flight is delayed, they receive an automatic payout through smart contracts—ensuring a **transparent, trustless, and automated** claims process.

## 🎯 Features
- **Buy Insurance:** Users can purchase flight insurance for 0.01 ETH by entering their flight number and departure time.
- **Automated Payouts:** If a flight is delayed, the insured user automatically receives 0.02 ETH—no middlemen required! *(a work in progress, will be improved with Chainlink oracles)*
- **Smart Automation:** The contract ensures that payouts are secure, instant, and transparent without intermediaries.
- **Security Features:**
  1. Prevents duplicate insurance purchases.
  2. Verifies claim eligibility based on flight data.
  3. Emits transaction logs for full transparency.

## 🛠️ Tech Stack
- **Blockchain:** Ethereum (Solidity, Hardhat for local testing)
- **Smart Contracts:** Solidity
- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend (Web3):** Ethers.js
- **Storage (optional):** IPFS
- **Oracle Integration (Upcoming):** Chainlink

## 📂 Project Structure
```
flight-insurance-dapp/
│── frontend/            # Frontend application (Next.js + React)
│   ├── pages/           # Next.js pages (Main UI)
│   │   ├── api/         # API routes (if needed in future)
│   │   ├── _app.js      # Main app configuration
│   │   ├── _document.js # Custom document structure
│   │   ├── index.js     # Home page (Flight insurance UI)
│   ├── styles/          # Tailwind CSS styles
│   │   ├── globals.css  # Global styles
│   ├── utils/           # Helper functions (Web3 integration)
│   │   ├── connectWallet.js      # Web3 wallet connection logic
│   │   ├── FlightInsuranceABI.json # ABI of the deployed smart contract
│   ├── public/          # Static assets (if any)
│   ├── package.json     # Frontend dependencies
│   ├── postcss.config.mjs # PostCSS configuration
│   ├── tailwind.config.mjs # Tailwind CSS configuration
│   ├── jsconfig.json    # JS config for module resolution
│   ├── next.config.mjs  # Next.js configuration
│── smart-contracts/     # Solidity contracts (Deployed via Remix IDE)
│   ├── FlightInsurance.sol  # Main smart contract (Deployed using Remix)
│── README.md            # Project documentation
│── .gitignore           # Git ignore file

```

## 🔧 Installation & Setup
### **1️⃣ Clone the repository**
```bash
git clone https://github.com/NIKH320/flight-insurance-dapp.git
cd flight-insurance-dapp
```

### **2️⃣ Smart Contract Setup**
``
### Smart Contract Deployment (Remix IDE)

1. Open [Remix IDE](https://remix.ethereum.org/).
2. Create a new file under the contracts folder and name it `FlightInsurance.sol`.
3. Copy and paste the Solidity smart contract code into `FlightInsurance.sol`.
4. Compile the contract:
   - Go to the **Solidity Compiler** tab in Remix.
   - Select the appropriate compiler version (matching the pragma version in the contract).
   - Click **Compile FlightInsurance.sol**.
5. Deploy the contract:
   - Navigate to the **Deploy & Run Transactions** tab.
   - Select **Injected Provider - Metamask** as the environment.
   - Ensure your Metamask is connected to the desired blockchain network (e.g., Filecoin Testnet, Ethereum Testnet).
   - Click **Deploy** and confirm the transaction in Metamask.
6. Once deployed, you can interact with the contract using Remix’s UI or connect it to the frontend.

```

### **3️⃣ Frontend Setup**
```bash
cd frontend
npm install  # Install dependencies
npm run dev  # Start frontend

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```

## 🚀 Future Enhancements
- 🔗 **Automate flight delay verification** using **Chainlink oracles**.
- ⚡ **Improve Web2-Web3 connectivity** for seamless UI interaction.
- 🔥 **Optimize gas fees** for transactions.

## 📜 License
This project is **open-source** and available under the **MIT License**.




