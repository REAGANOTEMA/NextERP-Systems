const db = require('../config/database');

// Get user attendance
const getUserAttendance = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { course_id, start_date, end_date } = req.query;

    let query = `
      SELECT a.*, c.course_code, c.course_name, c.instructor
      FROM attendance a
      INNER JOIN courses c ON a.course_id = c.id
      INNER JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      WHERE a.user_id = ?
    `;
    const params = [userId, userId];

    if (course_id) {
      query += ' AND a.course_id = ?';
      params.push(course_id);
    }
    if (start_date) {
      query += ' AND a.attendance_date >= ?';
      params.push(start_date);
    }
    if (end_date) {
      query += ' AND a.attendance_date <= ?';
      params.push(end_date);
    }

    query += ' ORDER BY a.attendance_date DESC';

    const [attendance] = await db.execute(query, params);

    res.json({
      success: true,
      attendance
    });
  } catch (error) {
    console.error('Get attendance error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch attendance' });
  }
};

// Get attendance summary
const getAttendanceSummary = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [summary] = await db.execute(`
      SELECT 
        COUNT(*) as total_classes,
        COUNT(CASE WHEN status = 'present' THEN 1 END) as present_count,
        COUNT(CASE WHEN status = 'absent' THEN 1 END) as absent_count,
        COUNT(CASE WHEN status = 'late' THEN 1 END) as late_count,
        ROUND(COUNT(CASE WHEN status = 'present' THEN 1 END) * 100.0 / COUNT(*), 2) as attendance_percentage
      FROM attendance a
      INNER JOIN enrollments e ON a.course_id = e.course_id AND e.user_id = ?
      WHERE a.user_id = ?
    `, [userId, userId]);

    res.json({
      success: true,
      summary: summary[0]
    });
  } catch (error) {
    console.error('Get attendance summary error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch attendance summary' });
  }
};

// Mark attendance (for faculty/admin)
const markAttendance = async (req, res) => {
  try {
    const { user_id, course_id, attendance_date, status, notes } = req.body;

    // Validate input
    if (!user_id || !course_id || !attendance_date || !status) {
      return res.status(400).json({ success: false, message: 'All required fields must be provided' });
    }

    // Check if attendance already exists
    const [existing] = await db.execute(
      'SELECT id FROM attendance WHERE user_id = ? AND course_id = ? AND attendance_date = ?',
      [user_id, course_id, attendance_date]
    );

    if (existing.length > 0) {
      // Update existing attendance
      await db.execute(`
        UPDATE attendance 
        SET status = ?, notes = ?
        WHERE user_id = ? AND course_id = ? AND attendance_date = ?
      `, [status, notes, user_id, course_id, attendance_date]);
    } else {
      // Create new attendance record
      await db.execute(`
        INSERT INTO attendance (user_id, course_id, attendance_date, status, notes)
        VALUES (?, ?, ?, ?, ?)
      `, [user_id, course_id, attendance_date, status, notes]);
    }

    res.json({
      success: true,
      message: 'Attendance marked successfully'
    });
  } catch (error) {
    console.error('Mark attendance error:', error);
    res.status(500).json({ success: false, message: 'Failed to mark attendance' });
  }
};

module.exports = {
  getUserAttendance,
  getAttendanceSummary,
  markAttendance
};
