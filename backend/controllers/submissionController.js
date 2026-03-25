const db = require('../config/database');

// Submit assignment
const submitAssignment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { assignmentId, submission_text, file_path } = req.body;

    // Check if assignment exists and user is enrolled
    const [assignments] = await db.execute(`
      SELECT a.*, c.course_code
      FROM assignments a
      INNER JOIN courses c ON a.course_id = c.id
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
      WHERE a.id = ? AND e.user_id = ?
    `, [userId, assignmentId, userId]);

    if (assignments.length === 0) {
      return res.status(404).json({ success: false, message: 'Assignment not found or not enrolled' });
    }

    const assignment = assignments[0];

    // Check if already submitted
    const [existing] = await db.execute(
      'SELECT id FROM submissions WHERE assignment_id = ? AND user_id = ?',
      [assignmentId, userId]
    );

    if (existing.length > 0) {
      // Update existing submission
      await db.execute(`
        UPDATE submissions 
        SET submission_text = ?, file_path = ?, submitted_at = NOW(), status = 'submitted'
        WHERE assignment_id = ? AND user_id = ?
      `, [submission_text, file_path, assignmentId, userId]);
    } else {
      // Create new submission
      await db.execute(`
        INSERT INTO submissions (assignment_id, user_id, submission_text, file_path, status)
        VALUES (?, ?, ?, ?, 'submitted')
      `, [assignmentId, userId, submission_text, file_path]);
    }

    res.json({
      success: true,
      message: 'Assignment submitted successfully'
    });
  } catch (error) {
    console.error('Submit assignment error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit assignment' });
  }
};

// Get user submissions
const getUserSubmissions = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { status } = req.query;

    let query = `
      SELECT s.*, a.title, a.due_date, a.points as max_points,
             c.course_code, c.course_name, c.instructor,
             a.week_number, a.block_number
      FROM submissions s
      INNER JOIN assignments a ON s.assignment_id = a.id
      INNER JOIN courses c ON a.course_id = c.id
      WHERE s.user_id = ?
    `;
    const params = [userId];

    if (status) {
      query += ' AND s.status = ?';
      params.push(status);
    }

    query += ' ORDER BY s.submitted_at DESC';

    const [submissions] = await db.execute(query, params);

    res.json({
      success: true,
      submissions
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch submissions' });
  }
};

// Get submission by ID
const getSubmissionById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const [submissions] = await db.execute(`
      SELECT s.*, a.title, a.due_date, a.points as max_points,
             c.course_code, c.course_name, c.instructor,
             a.week_number, a.block_number, a.description as assignment_description
      FROM submissions s
      INNER JOIN assignments a ON s.assignment_id = a.id
      INNER JOIN courses c ON a.course_id = c.id
      WHERE s.id = ? AND s.user_id = ?
    `, [id, userId]);

    if (submissions.length === 0) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    res.json({
      success: true,
      submission: submissions[0]
    });
  } catch (error) {
    console.error('Get submission error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch submission' });
  }
};

module.exports = {
  submitAssignment,
  getUserSubmissions,
  getSubmissionById
};
