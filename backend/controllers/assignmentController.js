const db = require('../config/database');

// Get all assignments for a user
const getUserAssignments = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { week, block, course, status } = req.query;

    let query = `
      SELECT a.*, c.course_code, c.course_name, c.instructor,
             s.id as submission_id, s.status as submission_status, 
             s.points_earned, s.feedback, s.submitted_at
      FROM assignments a
      INNER JOIN courses c ON a.course_id = c.id
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      LEFT JOIN submissions s ON a.id = s.assignment_id AND s.user_id = ?
      WHERE e.user_id = ?
    `;
    const params = [userId, userId, userId];

    // Add filters
    if (week) {
      query += ' AND a.week_number = ?';
      params.push(week);
    }
    if (block) {
      query += ' AND a.block_number = ?';
      params.push(block);
    }
    if (course) {
      query += ' AND c.course_code = ?';
      params.push(course);
    }
    if (status) {
      query += ' AND s.status = ?';
      params.push(status);
    }

    query += ' ORDER BY a.block_number, a.week_number, a.due_date';

    const [assignments] = await db.execute(query, params);

    res.json({
      success: true,
      assignments
    });
  } catch (error) {
    console.error('Get assignments error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assignments' });
  }
};

// Get assignment by ID
const getAssignmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const [assignments] = await db.execute(`
      SELECT a.*, c.course_code, c.course_name, c.instructor,
             s.id as submission_id, s.status as submission_status, 
             s.points_earned, s.feedback, s.submitted_at, s.submission_text
      FROM assignments a
      INNER JOIN courses c ON a.course_id = c.id
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      LEFT JOIN submissions s ON a.id = s.assignment_id AND s.user_id = ?
      WHERE a.id = ? AND e.user_id = ?
    `, [userId, userId, id, userId]);

    if (assignments.length === 0) {
      return res.status(404).json({ success: false, message: 'Assignment not found' });
    }

    res.json({
      success: true,
      assignment: assignments[0]
    });
  } catch (error) {
    console.error('Get assignment error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assignment' });
  }
};

// Get assignment statistics
const getAssignmentStats = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [stats] = await db.execute(`
      SELECT 
        COUNT(*) as total_assignments,
        COUNT(CASE WHEN s.status = 'graded' THEN 1 END) as graded_count,
        COUNT(CASE WHEN s.status = 'submitted' THEN 1 END) as submitted_count,
        COUNT(CASE WHEN s.status IS NULL OR s.status = 'draft' THEN 1 END) as pending_count,
        COUNT(CASE WHEN a.due_date < CURDATE() AND s.status != 'graded' THEN 1 END) as overdue_count,
        AVG(CASE WHEN s.points_earned > 0 THEN (s.points_earned / a.points * 100) END) as avg_grade_percent
      FROM assignments a
      INNER JOIN courses c ON a.course_id = c.id
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      LEFT JOIN submissions s ON a.id = s.assignment_id AND s.user_id = ?
      WHERE e.user_id = ? AND a.status = 'published'
    `, [userId, userId, userId]);

    res.json({
      success: true,
      stats: stats[0]
    });
  } catch (error) {
    console.error('Get assignment stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assignment statistics' });
  }
};

// Get assignments by week/block
const getAssignmentsByWeek = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { week, block } = req.params;

    const [assignments] = await db.execute(`
      SELECT a.*, c.course_code, c.course_name, c.instructor,
             s.id as submission_id, s.status as submission_status, 
             s.points_earned, s.feedback, s.submitted_at
      FROM assignments a
      INNER JOIN courses c ON a.course_id = c.id
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      LEFT JOIN submissions s ON a.id = s.assignment_id AND s.user_id = ?
      WHERE e.user_id = ? AND a.status = 'published'
      ${week ? 'AND a.week_number = ?' : ''}
      ${block ? 'AND a.block_number = ?' : ''}
      ORDER BY a.due_date
    `, [userId, userId, userId, ...(week ? [week] : []), ...(block ? [block] : [])]);

    res.json({
      success: true,
      assignments
    });
  } catch (error) {
    console.error('Get assignments by week error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assignments' });
  }
};

module.exports = {
  getUserAssignments,
  getAssignmentById,
  getAssignmentStats,
  getAssignmentsByWeek
};
