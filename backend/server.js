const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// ✅ CORS for frontend with credentials
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

// ✅ Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Import Routes
const contactRoutes = require('./routes/contactRoute');
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

// const twofaRoute = require("./routes/twofactor");

const twoFactorRoutes = require("./routes/twofactor");
app.use("/api/2fa", twoFactorRoutes);

// ✅ Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/deposit", require("./routes/deposit"));


// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});
