const express = require("express");
const cors = require("cors");
const { sendTransaction, getBalance } = require("../api/wallet-api");
const { WALLET_ADDRESS } = require("../config/config");

const app = express();
app.use(express.json());
app.use(cors());

// Fetch current Pi balance
app.get("/api/balance", async (req, res) => {
    try {
        const balance = await getBalance(WALLET_ADDRESS);
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ error: "Error fetching balance" });
    }
});

// Send Pi transaction
app.post("/api/send", async (req, res) => {
    const { recipient, amount } = req.body;

    if (!recipient || !amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid recipient or amount" });
    }

    try {
        const result = await sendTransaction(recipient, amount);
        if (result.success) {
            res.json({ message: "Transaction successful", txHash: result.txHash });
        } else {
            res.status(500).json({ error: "Transaction failed", details: result });
        }
    } catch (error) {
        res.status(500).json({ error: "Transaction error", details: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
