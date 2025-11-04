const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  gateway: { type: String, required: true },
  wallet: { type: String, required: true },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Deposit", DepositSchema);
