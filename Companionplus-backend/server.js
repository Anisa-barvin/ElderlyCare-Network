/*
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));


// Connect DB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on port 5000');
      console.log('MongoDB connected');
    });
  })
  .catch(err => console.log(err));
*/
// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// ✅ Middleware
app.use(cors({ origin: '*' })); // Allow all origins (you can restrict later)
app.use(express.json());        // Parse JSON body

// ✅ Routes
app.use('/api/auth', authRoutes);

// ✅ Health check route (optional but useful)
app.get('/', (req, res) => {
  res.send('Companion+ Backend is running...');
});

// ✅ MongoDB + Server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log('✅ MongoDB connected');
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
