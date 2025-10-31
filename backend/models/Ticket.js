const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    priority: { type: String, enum: ["High", "Mid", "Low"], default: "Mid" },
    message: { type: String, required: true },

    // Multiple attachments support
    attachments: { type: [String], default: [] },

    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
    lastReply: { type: String, default: "Just now" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
