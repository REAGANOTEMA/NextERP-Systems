const db = require('../config/database');

// Get user finances
const getUserFinances = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { status, type } = req.query;

    let query = `
      SELECT f.*, 
             SUM(CASE WHEN f.status = 'paid' THEN f.amount ELSE 0 END) OVER() as total_paid,
             SUM(CASE WHEN f.status != 'paid' THEN f.amount ELSE 0 END) OVER() as total_pending
      FROM finances f
      WHERE f.user_id = ?
    `;
    const params = [userId];

    if (status) {
      query += ' AND f.status = ?';
      params.push(status);
    }
    if (type) {
      query += ' AND f.transaction_type = ?';
      params.push(type);
    }

    query += ' ORDER BY f.created_at DESC';

    const [finances] = await db.execute(query, params);

    res.json({
      success: true,
      finances
    });
  } catch (error) {
    console.error('Get finances error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch finances' });
  }
};

// Get finance summary
const getFinanceSummary = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [summary] = await db.execute(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) as total_paid,
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) as total_pending,
        SUM(CASE WHEN status = 'overdue' THEN amount ELSE 0 END) as total_overdue,
        SUM(CASE WHEN transaction_type = 'payment' THEN amount ELSE 0 END) as total_payments,
        SUM(CASE WHEN transaction_type = 'fee' THEN amount ELSE 0 END) as total_fees
      FROM finances
      WHERE user_id = ?
    `, [userId]);

    res.json({
      success: true,
      summary: summary[0]
    });
  } catch (error) {
    console.error('Get finance summary error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch finance summary' });
  }
};

// Add finance record
const addFinanceRecord = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { transaction_type, amount, description, due_date, payment_method } = req.body;

    // Validate input
    if (!transaction_type || !amount || !description) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const [result] = await db.execute(`
      INSERT INTO finances (user_id, transaction_type, amount, description, due_date, payment_method)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [userId, transaction_type, amount, description, due_date, payment_method]);

    res.json({
      success: true,
      message: 'Finance record added successfully',
      financeId: result.insertId
    });
  } catch (error) {
    console.error('Add finance record error:', error);
    res.status(500).json({ success: false, message: 'Failed to add finance record' });
  }
};

module.exports = {
  getUserFinances,
  getFinanceSummary,
  addFinanceRecord
};
