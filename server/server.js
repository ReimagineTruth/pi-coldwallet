const express = require('express');
const cors = require('cors');
const { fetchBalance, fetchTransactionHistory, sendPi } = require('../api/wallet-api');

const app = express();
app.use(cors());
app.use(express.json());

// Route to get wallet balance
app.get('/balance', async (req, res) => {
    try {
        const balance = await fetchBalance();
        res.json(balance);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch balance' });
    }
});

// Route to get transaction history
app.get('/transactions', async (req, res) => {
    try {
        const transactions = await fetchTransactionHistory();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// Route to send Pi transaction
app.post('/send', async (req, res) => {
    const { destination, amount } = req.body;
    try {
        const result = await sendPi(destination, amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Transaction failed' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
