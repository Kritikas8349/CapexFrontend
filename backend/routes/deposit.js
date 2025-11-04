const express = require("express");
const router = express.Router();
const Deposit = require("../models/Deposit");

router.post("/", async (req, res) => {
  try {
    const { userId, amount, currency, gateway, wallet } = req.body;

    if (!userId || !amount || !currency || !gateway || !wallet) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newDeposit = new Deposit({
      userId,
      amount,
      currency,
      gateway,
      wallet
    });

    await newDeposit.save();

    res.json({ success: true, message: "Deposit request submitted!" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
});

module.exports = router;
