import { ethers } from "ethers";

export const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
        console.error("No Ethereum wallet detected. Install Metamask.");
        alert("No crypto wallet found. Please install Metamask.");
        return { provider: null, signer: null, account: null };
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        const account = await signer.getAddress();

        return { provider, signer, account };
    } catch (error) {
        console.error("Error connecting wallet:", error);
        return { provider: null, signer: null, account: null };
    }
};
