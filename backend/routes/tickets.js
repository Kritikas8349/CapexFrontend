const express = require('express');
const multer = require('multer');
const path = require('path');
const Ticket = require('../models/Ticket');

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 128 * 1024 * 1024 }, // 128MB max
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) cb(null, true);
    else cb(new Error('Invalid file type'));
  },
});

// ✅ POST route to create new ticket
router.post('/', upload.array('attachments', 5), async (req, res) => {
  try {
    const { name, email, subject, priority, message } = req.body;

    const files = req.files ? req.files.map(f => f.path) : [];

    const newTicket = new Ticket({
      name,
      email,
      subject,
      priority,
      message,
      attachments: files,
    });

    await newTicket.save();
    res.status(201).json({ success: true, message: 'Ticket created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// ✅ GET route to fetch all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching tickets' });
  }
});

module.exports = router;
