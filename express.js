const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Example data
const botsData = [
  { id: 1, name: "Bot 1" },
  { id: 2, name: "Bot 2" },
  { id: 3, name: "Bot 3" }
];

// Route to handle OPTIONS preflight request
app.options('/bots', cors()); // Enable CORS for the preflight request

// Route to handle POST request for bots data
app.post('/bots', (req, res) => {
  // Return bots data as response
  res.json(botsData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
