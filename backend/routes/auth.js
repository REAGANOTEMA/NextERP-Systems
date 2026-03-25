const express = require('express');
const router = express.Router();
const { register, login, verifyToken, getCurrentUser } = require('../controllers/authController');

// Register new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get current user (protected route)
router.get('/me', verifyToken, getCurrentUser);

module.exports = router;
