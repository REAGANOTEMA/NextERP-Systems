const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { getUserProfile, updateUserProfile, getAcademicProgress } = require('../controllers/userController');

// Get user profile (protected)
router.get('/profile', verifyToken, getUserProfile);

// Update user profile (protected)
router.put('/profile', verifyToken, updateUserProfile);

// Get academic progress (protected)
router.get('/academic-progress', verifyToken, getAcademicProgress);

module.exports = router;
