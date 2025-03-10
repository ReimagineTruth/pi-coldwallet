let generatedOTP = "";

function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userData = JSON.parse(localStorage.getItem(`user_${username}`));

    if (!userData || userData.password !== password) {
        alert("Invalid username or password.");
        return;
    }

    // Generate 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Your 2FA code is: ${generatedOTP}`); // Simulated Email

    document.getElementById("2faSection").classList.remove("hidden");
}

function verify2FA() {
    let userCode = document.getElementById("otpCode").value.trim();

    if (userCode !== generatedOTP) {
        alert("Incorrect 2FA code.");
        return;
    }

    localStorage.setItem("2FA_authenticated", "true");
    alert("2FA verification successful! Redirecting to wallet...");
    window.location.href = "wallet.html";
}

function logout() {
    localStorage.removeItem("2FA_authenticated");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}
