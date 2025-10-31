const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Import Routes
const contactRoutes = require('./routes/contactRoute');

const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

// ✅ Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use("/api/contact", contactRoutes);  

// ✅ MongoDB Connection
mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

// ✅ Base Route
app.get('/', (req, res) => {
  res.send('API is running...');
});
