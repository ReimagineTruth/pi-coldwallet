# Security Policy

## Overview
The **Pi TruthWeb - Cold Wallet** project is committed to ensuring the security of its users and contributors. This cold wallet interface interacts with the Pi Network Testnet to manage Test-Pi, and we take security seriously to protect the integrity of the application and its users' data. This document outlines how to report security vulnerabilities and our process for addressing them.

## Supported Versions
As of March 10, 2025, this project is in an early development stage with a single version. We currently support and provide security updates for:

| Version | Supported          |
|---------|--------------------|
| Latest  | :white_check_mark: |

Future releases will be tracked here once versioned updates are introduced.

## Reporting a Vulnerability
If you discover a security vulnerability in the Pi TruthWeb - Cold Wallet project, please report it to us promptly. We appreciate your efforts in keeping this project secure and will acknowledge your contribution.

### How to Report
- **Contact**: Email us at [insert contact email, e.g., security@truthweb.io] or open a private issue on GitHub if available (e.g., via GitHub Security Advisories).
- **Details**: Include the following in your report:
  - A clear description of the vulnerability.
  - Steps to reproduce the issue (if applicable).
  - Potential impact (e.g., data exposure, unauthorized access).
  - Any suggested fixes (optional).

### Response Process
1. **Acknowledgment**: We will confirm receipt of your report within 48 hours.
2. **Investigation**: The maintainers will investigate the issue and assess its severity.
3. **Resolution**: We aim to resolve critical vulnerabilities within 7 days and less severe issues within 30 days, depending on complexity.
4. **Disclosure**: Once fixed, we’ll notify you and may publicly disclose the issue (with your permission) in a release note or security advisory, crediting you unless you prefer anonymity.

## Security Features
- **Offline Storage**: Balances are cached in `localStorage` for offline use, with no sensitive private keys stored in this client-side demo.
- **Testnet Only**: This project uses Test-Pi on the Pi Network Testnet, which has no real-world value, reducing financial risk.
- **No Server-Side Logic**: As a static HTML/JS application, it avoids server-side vulnerabilities like SQL injection.

## Known Limitations
- **Testnet Dependency**: Balance fetching relies on `https://api.testnet.minepi.com`, which requires the wallet address to be funded and active. Failures fall back to cached data.
- **Simulation**: Sending Test-Pi is simulated locally and does not interact with the blockchain in this version.
- **CDN Usage**: Relies on external CDNs (Tailwind CSS, Font Awesome, Stellar SDK), which could introduce supply-chain risks if compromised.

## Best Practices for Users
- **Verify Address**: Always double-check the wallet address (`GDXC7DFLZFEDT65JA6I7DHHGG7OENSM7HZAKTSFFHAL3A3LFRREVNJWN`) when sending Test-Pi.
- **Secure Environment**: Run this application locally or on a trusted server to avoid tampering.
- **Check Updates**: Use the latest version from this repository for security fixes.

## Contact
For security-related questions or to report a vulnerability, reach out via [insert contact email, e.g., security@truthweb.io] or visit [truthweb.io](https://truthweb.io).

---

**Last Updated**: March 10, 2025
