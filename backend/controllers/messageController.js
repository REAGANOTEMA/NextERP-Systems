const db = require('../config/database');

// Get messages for user
const getUserMessages = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { type, status } = req.query;

    let query = `
      SELECT m.*, 
             sender.first_name as sender_first_name, 
             sender.last_name as sender_last_name,
             receiver.first_name as receiver_first_name,
             receiver.last_name as receiver_last_name
      FROM messages m
      LEFT JOIN users sender ON m.sender_id = sender.id
      LEFT JOIN users receiver ON m.receiver_id = receiver.id
      WHERE (m.sender_id = ? OR m.receiver_id = ?)
    `;
    const params = [userId, userId];

    if (type) {
      query += ' AND m.message_type = ?';
      params.push(type);
    }
    if (status) {
      query += ' AND m.status = ?';
      params.push(status);
    }

    query += ' ORDER BY m.sent_at DESC';

    const [messages] = await db.execute(query, params);

    res.json({
      success: true,
      messages
    });
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
};

// Send message
const sendMessage = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { receiver_id, subject, message_text, message_type = 'message' } = req.body;

    // Validate input
    if (!receiver_id || !subject || !message_text) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Check if receiver exists
    const [receivers] = await db.execute(
      'SELECT id FROM users WHERE id = ?',
      [receiver_id]
    );

    if (receivers.length === 0) {
      return res.status(404).json({ success: false, message: 'Receiver not found' });
    }

    // Send message
    const [result] = await db.execute(`
      INSERT INTO messages (sender_id, receiver_id, subject, message_text, message_type)
      VALUES (?, ?, ?, ?, ?)
    `, [userId, receiver_id, subject, message_text, message_type]);

    res.json({
      success: true,
      message: 'Message sent successfully',
      messageId: result.insertId
    });
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};

// Mark message as read
const markAsRead = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { messageId } = req.params;

    await db.execute(`
      UPDATE messages 
      SET status = 'read', read_at = NOW()
      WHERE id = ? AND receiver_id = ?
    `, [messageId, userId]);

    res.json({
      success: true,
      message: 'Message marked as read'
    });
  } catch (error) {
    console.error('Mark as read error:', error);
    res.status(500).json({ success: false, message: 'Failed to mark message as read' });
  }
};

// Get unread messages count
const getUnreadCount = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [result] = await db.execute(
      'SELECT COUNT(*) as count FROM messages WHERE receiver_id = ? AND status = "unread"',
      [userId]
    );

    res.json({
      success: true,
      unreadCount: result[0].count
    });
  } catch (error) {
    console.error('Get unread count error:', error);
    res.status(500).json({ success: false, message: 'Failed to get unread count' });
  }
};

module.exports = {
  getUserMessages,
  sendMessage,
  markAsRead,
  getUnreadCount
};
