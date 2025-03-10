// wallet-api.js
const WALLET_ADDRESS = 'GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN';
const PI_TESTNET_SERVER = new StellarSdk.Server('https://api.testnet.minepi.com', { allowHttp: false });

// Fetch real Testnet balance
async function fetchRealTestnetBalance() {
    try {
        const server = new StellarSdk.Server('https://api.testnet.minepi.com');
        const account = await server.loadAccount(WALLET_ADDRESS);
        const balance = account.balances.find(b => b.asset_type === 'native').balance;
        return { balance: parseFloat(balance).toFixed(2) };
    } catch (error) {
        console.error('Error fetching real balance:', error);
        throw error;
    }
}

// Update balance display (shared function)
async function updateBalance(balanceElement, statusElement) {
    try {
        const response = await fetchRealTestnetBalance();
        const balance = parseFloat(response.balance);
        balanceElement.textContent = `${balance} π (Test)`;
        statusElement.textContent = 'Last updated: ' + new Date().toLocaleTimeString();
        localStorage.setItem('piBalance', balance);
        return balance;
    } catch (error) {
        balanceElement.textContent = 'Error';
        statusElement.textContent = 'Failed to fetch balance';
        const cachedBalance = localStorage.getItem('piBalance');
        if (cachedBalance) balanceElement.textContent = `${parseFloat(cachedBalance).toFixed(2)} π (Test)`;
        throw error;
    }
}

// Export functions for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchRealTestnetBalance, updateBalance };
} else {
    window.fetchRealTestnetBalance = fetchRealTestnetBalance;
    window.updateBalance = updateBalance;
}
