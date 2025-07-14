const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // ✅ Update this to your frontend domain when deployed
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);

// ✅ Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/build')));

// ✅ React client routing fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err);
  res.status(err.statusCode || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
