const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

// ✅ Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/profile/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ✅ REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const { username, fullName, email, phone, password, country } = req.body;

    let user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "User already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    user = new User({
      username,
      fullName,
      email,
      phone,
      password: hashedPass,
      country,
    });

    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.log("Register Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ LOGIN USER
router.post("/login", async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    let user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // ✅ If 2FA enabled, verify OTP
    if (user.google2fa) {
      if (!otp) return res.status(400).json({ message: "OTP required" });

      const verified = speakeasy.totp.verify({
        secret: user.google2fa,
        encoding: "base32",
        token: otp,
        window: 2,
      });

      if (!verified)
        return res.status(400).json({ message: "Invalid OTP" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    console.log("Login Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ GET PROFILE
router.get("/profile/:email", async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const user = await User.findOne({ email }).select("-password");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.log("Get Profile Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ UPDATE PROFILE
router.put("/update-profile/:email", upload.single("avatar"), async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const { firstName, lastName, state, city, zipCode, address } = req.body;

    let updateData = { firstName, lastName, state, city, zipCode, address };

    if (req.file) {
      updateData.avatar = `/uploads/profile/${req.file.filename}`;
    }

    const user = await User.findOneAndUpdate({ email }, updateData, {
      new: true,
    }).select("-password");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json({
      message: "Profile updated successfully",
      user,
    });

  } catch (err) {
    console.log("Update Profile Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ GENERATE 2FA SECRET + QR
router.get("/generate-2fa", async (req, res) => {
  try {
    const secret = speakeasy.generateSecret({
      name: "MarketTrade",
      length: 20,
    });

    const qrCode = await qrcode.toDataURL(secret.otpauth_url);

    res.json({
      success: true,
      secret: secret.base32,
      qrCode,
      otpauth_url: secret.otpauth_url,
    });
  } catch (err) {
    console.log("Generate 2FA Error:", err);
    res.status(500).json({ message: "Error generating 2FA" });
  }
});

// ✅ VERIFY 2FA & SAVE SECRET
router.post("/verify-2fa", async (req, res) => {
  try {
    const { token, secret, email } = req.body;

    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      window: 2,
    });

    if (!verified) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    await User.findOneAndUpdate({ email }, { google2fa: secret });

    res.json({ success: true, message: "2FA Enabled Successfully ✅" });

  } catch (err) {
    console.log("Verify 2FA Error:", err);
    res.status(500).json({ message: "Error verifying OTP" });
  }
});

module.exports = router;
