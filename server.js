const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();  // To load environment variables from the .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the static form HTML
app.use(express.static(path.join(__dirname, 'public')));


// CORS Middleware (Global)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Import the User model
const User = require('./models/user');

// Handle POST request to save data to MongoDB
app.post('/submit', async (req, res) => {
  try {
 
    const { fullname, email, number, collection, textarea   } = req.body;
    
    if (!fullname || !email || !number || !collection || !textarea) {
      return res.status(400).send('All fields are required');
  }
    // Create a new user object
    const newUser = new User({  fullname,
      email,
      number,
      collection,
      textarea });

    // Save the user to the database
    await newUser.save();

    console.log('New login:', newUser);
    res.send('User data submitted successfully!');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Error submitting user data.');
  }
});


// GET route to serve the form
app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'));
  });


// Start server
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
  // Handle server errors
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('Port 3300 is already in use. Please use a different port.');
        process.exit(1);
    }
  });
  
