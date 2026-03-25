const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { getUserAttendance, getAttendanceSummary, markAttendance } = require('../controllers/attendanceController');

// Get user attendance (protected)
router.get('/', verifyToken, getUserAttendance);

// Get attendance summary (protected)
router.get('/summary', verifyToken, getAttendanceSummary);

// Mark attendance (protected - faculty/admin only)
router.post('/', verifyToken, markAttendance);

module.exports = router;
