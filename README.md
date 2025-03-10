# Pi TruthWeb - Cold Wallet

A lightweight, offline-capable cold wallet interface for managing Test-Pi on the Pi Network Testnet. Built as an open-source project under the MIT License by TruthWeb, this tool allows users to view real-time Test-Pi balances, receive Test-Pi via a QR code and wallet address, and simulate sending Test-Pi—all within a simple, browser-based UI.

## Overview
The **Pi TruthWeb - Cold Wallet** provides a secure and accessible way to interact with Test-Pi on the Pi Network Testnet. It’s designed for developers, enthusiasts, and early adopters to experiment with cold storage concepts while leveraging modern web technologies (HTML, Tailwind CSS, JavaScript, Stellar SDK). The wallet uses the hardcoded address `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN` and aims to evolve with the Pi Network’s ecosystem.

### Key Features
- **Real-Time Balance**: Fetches Test-Pi balance from `https://api.testnet.minepi.com` (requires a funded address), updating every 10 seconds with a fallback to `localStorage`.
- **Receive Test-Pi**: Displays a QR code and copyable wallet address for easy deposits.
- **Send Simulation**: Simulates Test-Pi transactions locally, deducting from the cached balance.
- **Offline Support**: Caches balance data for use without an internet connection.
- **Responsive Design**: Mobile-friendly UI styled with Tailwind CSS.

### Current State
As of March 10, 2025:
- Uses Test-Pi only (no Mainnet support yet).
- Sending is simulated; real transactions await Pi Apps SDK integration.
- Balance fetching requires the wallet address to be active on Testnet2.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox) with JavaScript enabled.
- Internet access for CDN dependencies and Testnet balance fetching.
- The wallet address `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN` must be funded on Testnet2 for real balance data.

## Installation
1. **Clone or Download**:
   ```bash
   git clone https://github.com/yourusername/pi-truthweb-cold-wallet.git
