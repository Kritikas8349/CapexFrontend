const express = require("express");
const ContactForm = require("../models/ContactForm");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, department, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    await ContactForm.create({
      firstName,
      lastName,
      email,
      phone,
      country,
      department,
      message,
    });

    res.status(200).json({ success: true, message: "Form submitted successfully ✅" });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
