const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { getUserFinances, getFinanceSummary, addFinanceRecord } = require('../controllers/financeController');

// Get user finances (protected)
router.get('/', verifyToken, getUserFinances);

// Get finance summary (protected)
router.get('/summary', verifyToken, getFinanceSummary);

// Add finance record (protected)
router.post('/', verifyToken, addFinanceRecord);

module.exports = router;
