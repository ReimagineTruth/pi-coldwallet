# Project Description

## Overview
The **Pi TruthWeb - Cold Wallet** is a lightweight, browser-based interface designed to manage Test-Pi on the Pi Network Testnet. Built as an open-source tool under the MIT License, it aims to provide a simple, secure, and offline-capable solution for users to interact with their Test-Pi holdings. This project is developed by TruthWeb and leverages modern web technologies to deliver a user-friendly experience without requiring server-side infrastructure.

The wallet currently supports viewing real-time Test-Pi balances (fetched from the Pi Testnet), receiving Test-Pi via a QR code and wallet address, and simulating Test-Pi transactions locally. It’s intended as a proof-of-concept for cold wallet functionality, with plans for future enhancements as the Pi Network evolves.

## Purpose
- **Cold Storage**: Enable users to securely view and manage Test-Pi offline, reducing exposure to online risks.
- **Testnet Exploration**: Provide a practical tool for developers and enthusiasts to experiment with the Pi Network Testnet.
- **Open Source**: Foster community collaboration and transparency under the MIT License.

## Key Features
1. **Real-Time Balance Display**:
   - Fetches the Test-Pi balance for the wallet address `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN` from the Pi Testnet using the Stellar SDK.
   - Updates every 10 seconds with a fallback to cached data in `localStorage` if the fetch fails.
2. **Receive Interface**:
   - Displays a QR code and copyable wallet address for receiving Test-Pi, styled after a payment checkout design.
3. **Send Simulation**:
   - Allows users to simulate sending Test-Pi to another address, deducting from the local balance (no blockchain interaction yet).
4. **Offline Capability**:
   - Stores balance data in `localStorage` for access without an internet connection.
5. **Responsive Design**:
   - Built with Tailwind CSS for a clean, mobile-friendly UI.

## Technical Details
- **Frontend**: HTML, CSS (via Tailwind CSS), and JavaScript.
- **Dependencies**:
  - **Stellar SDK**: For Testnet blockchain interaction (`https://api.testnet.minepi.com`).
  - **Tailwind CSS**: CDN-hosted for styling.
  - **Font Awesome**: CDN-hosted for icons.
- **Wallet Address**: Hardcoded as `GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN`.
- **File Structure**:
  - `index.html`: Main wallet page.
  - `receive.html`: Receive page with QR code and address.
  - `send.html`: Send page with transaction simulation.
  - `wallet-api.js`: JavaScript module for balance fetching and updates.
  - Supporting files: `LICENSE`, `README.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`.

## Current State
As of March 10, 2025:
- **Testnet Integration**: Balance fetching works only if the wallet address is funded on Testnet2. Otherwise, it relies on cached data.
- **Sending**: Simulated locally; real blockchain transactions require Pi Apps SDK integration (not implemented).
- **Scope**: Limited to Test-Pi (no Mainnet support, as Mainnet remains restricted).

## Future Plans
- Integrate the Pi Apps SDK for real transaction support once publicly available.
- Add private key management for true cold wallet functionality.
- Support Mainnet Pi when the Pi Network’s Open Network phase begins.
- Enhance security with local encryption for cached data.

## Why Use This Wallet?
- **Simplicity**: No complex setup—just open in a browser.
- **Security**: Offline-first design minimizes attack surfaces.
- **Transparency**: Open-source code allows auditing and customization.

## Limitations
- **Testnet Only**: Uses Test-Pi, which has no real value and is reset periodically.
- **No Real Transactions**: Sending is simulated until blockchain integration is added.
- **CDN Reliance**: External dependencies could pose risks if unavailable or compromised.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

© 2025 TruthWeb

## Learn More
- Visit [truthweb.io](https://truthweb.io) for additional context.
- Check [README.md](README.md) for installation and usage instructions.
- Review [SECURITY.md](SECURITY.md) for security policies and reporting guidelines.
