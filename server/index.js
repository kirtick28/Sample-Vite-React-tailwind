const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Add more API routes here
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Default route - Make sure this comes last
app.use((req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
