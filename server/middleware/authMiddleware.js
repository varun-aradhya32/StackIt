// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  
  // Check if there's a token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Get the token part from "Bearer token"

      // Decode the token and get the user
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Find the user in the database based on the decoded token
      req.user = await User.findById(decoded.id).select('-password'); // Exclude password field
      next();  // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = protect;
