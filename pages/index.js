import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { connectWallet } from "../utils/connectWallet";
import contractABI from "../utils/FlightInsuranceABI.json";

const CONTRACT_ADDRESS = "0x31f5cCd8BA0b4d59f7bC116b7f33207e8743264c";

export default function Home() {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState("0");
    const [flightNumber, setFlightNumber] = useState("");
    const [departureTime, setDepartureTime] = useState("");

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", () => window.location.reload());
        }
    }, []);

    const connect = async () => {
        const { provider, signer, account } = await connectWallet();
        setAccount(account);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
        setContract(contract);

        const balance = await provider.getBalance(CONTRACT_ADDRESS);
        setBalance(ethers.utils.formatEther(balance));
    };

    const buyInsurance = async () => {
        if (!contract) return alert("Connect wallet first");
        try {
            const tx = await contract.buyInsurance(flightNumber, departureTime, {
                value: ethers.utils.parseEther("0.01"),
            });
            await tx.wait();
            alert("Insurance Purchased!");
        } catch (error) {
            console.error("Error purchasing insurance:", error);
        }
    };

    const claimPayout = async () => {
        if (!contract) return alert("Connect wallet first");
        try {
            const tx = await contract.claimPayout(true);
            await tx.wait();
            alert("Payout Claimed!");
        } catch (error) {
            console.error("Error claiming payout:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Flight Insurance DApp</h1>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-96">
                {!account ? (
                    <button
                        onClick={connect}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-white py-2 px-4 rounded-lg font-semibold text-lg"
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <p className="text-center text-lg font-semibold mb-4">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
                )}
                <p className="text-center text-lg font-semibold mb-4">Contract Balance: {balance} ETH</p>

                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Flight Number"
                        className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setFlightNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Departure Time"
                        className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setDepartureTime(e.target.value)}
                    />
                    <button
                        onClick={buyInsurance}
                        className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-2 px-4 rounded-lg font-semibold text-lg"
                    >
                        Buy Insurance (0.01 ETH)
                    </button>
                </div>

                <button
                    onClick={claimPayout}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white py-2 px-4 rounded-lg font-semibold text-lg"
                >
                    Claim Payout
                </button>
            </div>
        </div>
    );
}
