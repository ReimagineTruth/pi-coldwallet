async function getBalance() {
    try {
        const response = await fetch('http://localhost:5000/balance');
        const data = await response.json();
        const balanceElem = document.getElementById('balance');
        balanceElem.textContent = data.balance;
        balanceElem.classList.add('updated');
        setTimeout(() => balanceElem.classList.remove('updated'), 1000);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}

async function sendTransaction() {
    const destination = document.getElementById('destination').value;
    const amount = document.getElementById('amount').value;

    if (!destination || !amount) {
        alert('Please fill all fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ destination, amount })
        });

        const data = await response.json();
        alert('Transaction Sent!');
        getBalance();
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

async function fetchTransactions() {
    try {
        const response = await fetch('http://localhost:5000/transactions');
        const transactions = await response.json();
        const transactionList = document.getElementById('transactions');
        transactionList.innerHTML = transactions
            .map(tx => `<li>${tx.id} - ${tx.amount} π</li>`)
            .join('');
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
}

window.onload = () => {
    getBalance();
    fetchTransactions();
};
