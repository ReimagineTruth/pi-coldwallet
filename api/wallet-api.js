const StellarSdk = require('stellar-sdk');
const config = require('../config/config');

const server = new StellarSdk.Server(config.TESTNET_SERVER);
const walletAddress = config.WALLET_ADDRESS;

// Fetch real-time balance
async function fetchBalance() {
    try {
        const account = await server.loadAccount(walletAddress);
        const balance = account.balances.find(b => b.asset_type === 'native').balance;
        return { balance: parseFloat(balance).toFixed(2) };
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
}

// Fetch transaction history
async function fetchTransactionHistory() {
    try {
        const transactions = await server.transactions()
            .forAccount(walletAddress)
            .order('desc')
            .limit(10)
            .call();
        return transactions.records;
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw error;
    }
}

// Send Pi transaction
async function sendPi(destination, amount) {
    try {
        const sourceKeys = StellarSdk.Keypair.fromSecret(config.SECRET_KEY);
        const account = await server.loadAccount(sourceKeys.publicKey());
        const fee = await server.fetchBaseFee();

        const transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: StellarSdk.Networks.TESTNET })
            .addOperation(StellarSdk.Operation.payment({
                destination,
                asset: StellarSdk.Asset.native(),
                amount: amount.toString()
            }))
            .setTimeout(30)
            .build();

        transaction.sign(sourceKeys);
        const response = await server.submitTransaction(transaction);
        return response;
    } catch (error) {
        console.error('Error sending Pi:', error);
        throw error;
    }
}

module.exports = { fetchBalance, fetchTransactionHistory, sendPi };
