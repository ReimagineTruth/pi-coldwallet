from flask import Flask, request, jsonify
from flask_cors import CORS
from Crypto.Cipher import AES
import base64
import os

app = Flask(__name__)
CORS(app)

# Secure AES Key (Must be 16, 24, or 32 bytes long)
AES_KEY = b'ThisIsASecretKey123456789012'  # Change this before production

# Simulated Wallet Storage (Replace with real wallet handling)
wallets = {
    "example-passphrase": "GA6WJ2V7FYBR7OQ5PO6F7YSOTROZFA7MWMFR5UO3K3S3HU6KZGZJ4YQX"
}

def encrypt_passphrase(passphrase):
    cipher = AES.new(AES_KEY, AES.MODE_ECB)
    padded = passphrase + (16 - len(passphrase) % 16) * " "
    encrypted = cipher.encrypt(padded.encode())
    return base64.b64encode(encrypted).decode()

def decrypt_passphrase(encrypted_passphrase):
    cipher = AES.new(AES_KEY, AES.MODE_ECB)
    decrypted = cipher.decrypt(base64.b64decode(encrypted_passphrase)).decode().strip()
    return decrypted

@app.route('/unlock-wallet', methods=['POST'])
def unlock_wallet():
    data = request.json
    passphrase = data.get("passphrase", "").strip()

    # Validate passphrase length (Must be exactly 24 words)
    if len(passphrase.split()) != 24:
        return jsonify({"success": False, "message": "Invalid passphrase length. Must be 24 words."}), 400

    encrypted_passphrase = encrypt_passphrase(passphrase)

    # Check if wallet exists in storage
    if passphrase in wallets:
        wallet_address = wallets[passphrase]
        return jsonify({"success": True, "walletAddress": wallet_address})
    
    return jsonify({"success": False, "message": "Invalid passphrase. Wallet not found."}), 401

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
