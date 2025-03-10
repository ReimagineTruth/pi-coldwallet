require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CryptoJS = require('crypto-js');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (Replace with your MongoDB URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Wallet Schema
const WalletSchema = new mongoose.Schema({
    encryptedPassphrase: String,
    walletAddress: String,
    transactions: Array
});
const Wallet = mongoose.model('Wallet', WalletSchema);

// 🔓 Unlock Wallet - Verify Passphrase & Connect to Pi API
app.post('/unlock-wallet', async (req, res) => {
    const { passphrase } = req.body;
    
    if (!passphrase || passphrase.split(' ').length !== 24) {
        return res.status(400).json({ success: false, message: 'Invalid passphrase' });
    }

    const encryptedPassphrase = CryptoJS.AES.encrypt(passphrase, process.env.SECRET_KEY).toString();

    try {
        const piResponse = await axios.post('https://api.minepi.com/wallet/unlock', { passphrase });

        if (piResponse.data.success) {
            let wallet = await Wallet.findOne({ walletAddress: piResponse.data.walletAddress });
            if (!wallet) {
                wallet = new Wallet({ encryptedPassphrase, walletAddress: piResponse.data.walletAddress, transactions: [] });
                await wallet.save();
            }

            res.json({ success: true, walletAddress: piResponse.data.walletAddress });
        } else {
            res.status(400).json({ success: false, message: 'Failed to unlock wallet' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error connecting to Pi Network API' });
    }
});

// 💰 Get Wallet Balance
app.get('/balance/:walletAddress', async (req, res) => {
    const { walletAddress } = req.params;

    try {
        const piResponse = await axios.get(`https://api.minepi.com/wallet/${walletAddress}/balance`);
        res.json({ success: true, balance: piResponse.data.balance });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching balance' });
    }
});

// 📜 Get Transaction History
app.get('/transactions/:walletAddress', async (req, res) => {
    const { walletAddress } = req.params;
    
    try {
        const wallet = await Wallet.findOne({ walletAddress });
        if (!wallet) return res.status(404).json({ success: false, message: 'Wallet not found' });

        res.json({ success: true, transactions: wallet.transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching transactions' });
    }
});

// 🚀 Send Pi Transaction
app.post('/send', async (req, res) => {
    const { senderAddress, recipientAddress, amount } = req.body;

    try {
        const piResponse = await axios.post('https://api.minepi.com/wallet/send', {
            senderAddress,
            recipientAddress,
            amount
        });

        if (piResponse.data.success) {
            await Wallet.findOneAndUpdate(
                { walletAddress: senderAddress },
                { $push: { transactions: `Sent ${amount} π to ${recipientAddress}` } }
            );

            res.json({ success: true, message: `Sent ${amount} π to ${recipientAddress}` });
        } else {
            res.status(400).json({ success: false, message: 'Transaction failed' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error processing transaction' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
