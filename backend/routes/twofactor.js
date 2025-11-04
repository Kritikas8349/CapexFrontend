const express = require("express");
const router = express.Router();
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const User = require("../models/User");

// ✅ Generate 2FA Secret & QR Code
router.post("/generate", async (req, res) => {
  try {
    const { userId, email } = req.body;

    if (!userId || !email) return res.status(400).json({ message: "User ID & Email required" });

    const secret = speakeasy.generateSecret({
      name: `CapexTrade (${email})`,
    });

    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);

    await User.findByIdAndUpdate(userId, { google2fa: secret.base32 });

    res.json({
      message: "2FA Setup Generated",
      secret: secret.base32,
      qr: qrCodeUrl
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Verify OTP & Enable 2FA
router.post("/verify", async (req, res) => {
  try {
    const { userId, otp } = req.body;

    const user = await User.findById(userId);
    if (!user || !user.google2fa)
      return res.status(400).json({ message: "2FA not initiated" });

    const verified = speakeasy.totp.verify({
      secret: user.google2fa,
      encoding: "base32",
      token: otp,
      window: 1
    });

    if (!verified) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    res.json({ message: "Two-Factor Authentication Enabled Successfully!" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Verify OTP During Login
router.post("/login", async (req, res) => {
  try {
    const { userId, otp } = req.body;

    const user = await User.findById(userId);
    if (!user || !user.google2fa)
      return res.status(400).json({ message: "2FA not active" });

    const verified = speakeasy.totp.verify({
      secret: user.google2fa,
      encoding: "base32",
      token: otp,
      window: 1
    });

    if (!verified) {
      return res.status(400).json({ message: "Wrong OTP" });
    }

    res.json({ message: "2FA Login Success" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
