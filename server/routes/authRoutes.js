const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');  // Ensure you're importing controller functions correctly
const router = express.Router();

// Define routes for registration and login
router.post('/register', registerUser);  // Ensure the handler is a function
router.post('/login', loginUser);        // Ensure the handler is a function

module.exports = router;
