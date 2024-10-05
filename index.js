const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');  // Ensure this points to your database connection configuration
const routes = require('./routes');  // Ensure you have defined routes for users and thoughts

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (if you have a frontend or public directory)
app.use(express.static('public'));

// Use the defined routes
app.use(routes);

// Connect to the database and start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for the social network running on port ${PORT}!`);
  });
});

// Handle any uncaught exceptions or unhandled promise rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
