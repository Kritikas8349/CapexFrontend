// models/Ticket.js
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    priority: { type: String, enum: ["High", "Mid", "Low"], default: "Mid" },
    message: { type: String, required: true },
    attachment: { type: String }, // file URL or filename
    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
    lastReply: { type: String, default: "Just now" },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
