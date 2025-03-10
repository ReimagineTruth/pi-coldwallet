const axios = require("axios");
const { WALLET_SECRET, WALLET_ADDRESS, API_URL } = require("../config/config");

async function getBalance(address) {
    try {
        const response = await axios.get(`${API_URL}/balance/${address}`);
        return response.data.balance;
    } catch (error) {
        console.error("Error fetching balance:", error);
        return 0;
    }
}

async function sendTransaction(recipient, amount) {
    try {
        const response = await axios.post(`${API_URL}/send`, {
            sender: WALLET_ADDRESS,
            recipient,
            amount,
            secret: WALLET_SECRET
        });

        return response.data; // { success: true, txHash: "0x1234..." }
    } catch (error) {
        console.error("Error sending transaction:", error);
        return { success: false, error: error.message };
    }
}

module.exports = { getBalance, sendTransaction };
