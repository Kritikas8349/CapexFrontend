// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load .env variables

const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json()); // Parse JSON requests

// ===== Routes =====
app.use('/api/auth', require('./routes/auth')); // Auth routes (register/login)

// ===== MongoDB Connection =====
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit process if DB connection fails
});

// ===== Optional: Default Route =====
app.get('/', (req, res) => {
    res.send('API is running...');
});
