const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/userModel'); // Correct import path

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected 🐝'))
  .catch(err => console.error(err));

// Basic Test Route
app.get('/', (req, res) => {
    res.send('Welcome to SWARM Backend API 🐝');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
