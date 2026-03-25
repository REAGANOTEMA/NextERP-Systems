const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { 
  getUserAssignments, 
  getAssignmentById, 
  getAssignmentStats, 
  getAssignmentsByWeek 
} = require('../controllers/assignmentController');

// Get user's assignments (protected)
router.get('/', verifyToken, getUserAssignments);

// Get assignment statistics (protected)
router.get('/stats', verifyToken, getAssignmentStats);

// Get assignments by week or block (protected)
router.get('/week/:week', verifyToken, getAssignmentsByWeek);
router.get('/block/:block', verifyToken, getAssignmentsByWeek);

// Get assignment by ID (protected)
router.get('/:id', verifyToken, getAssignmentById);

module.exports = router;
