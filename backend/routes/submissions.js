const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { submitAssignment, getUserSubmissions, getSubmissionById } = require('../controllers/submissionController');

// Submit assignment (protected)
router.post('/', verifyToken, submitAssignment);

// Get user submissions (protected)
router.get('/', verifyToken, getUserSubmissions);

// Get submission by ID (protected)
router.get('/:id', verifyToken, getSubmissionById);

module.exports = router;
