const express = require('express');
const deviceRoutes = require('./routes/devices');  // Import the routes for devices

const app = express();
const PORT = process.env.PORT || 3000;  // Use port 3000 or the port set in the environment

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route for the root path to display a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Network Device Monitoring app');
});

// Use the device routes under the "/devices" endpoint
app.use('/devices', deviceRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
