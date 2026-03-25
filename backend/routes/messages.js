const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { getUserMessages, sendMessage, markAsRead, getUnreadCount } = require('../controllers/messageController');

// Get user messages (protected)
router.get('/', verifyToken, getUserMessages);

// Send message (protected)
router.post('/', verifyToken, sendMessage);

// Get unread messages count (protected)
router.get('/unread/count', verifyToken, getUnreadCount);

// Mark message as read (protected)
router.put('/:messageId/read', verifyToken, markAsRead);

module.exports = router;
