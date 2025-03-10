# Pi TruthWeb - Cold Wallet

A lightweight, offline-capable cold wallet interface for managing Test-Pi on the Pi Network Testnet. This project provides a simple UI to view your wallet balance, receive Test-Pi, and simulate sending Test-Pi, with real-time balance updates fetched from the Pi Testnet blockchain.

## Features
- **Real-Time Balance**: Displays the Test-Pi balance for the wallet address `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN`, fetched from the Pi Testnet.
- **Receive Test-Pi**: Shows a QR code and wallet address with a "Copy Address" button for easy sharing.
- **Send Test-Pi**: Simulates sending Test-Pi to another address, updating the local balance.
- **Offline Storage**: Uses `localStorage` to cache the balance for offline access.
- **MIT Licensed**: Open-source under the MIT License.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox) with JavaScript enabled.
- Internet access for CDN dependencies (Tailwind CSS, Font Awesome, Stellar SDK) and Testnet balance fetching.
- The wallet address `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN` must be funded and active on the Pi Testnet2 for real balance data.

## Installation
1. **Clone or Download**:
   - Clone this repository or download the ZIP file.
   ```bash
   git clone https://github.com/yourusername/pi-truthweb-cold-wallet.git
