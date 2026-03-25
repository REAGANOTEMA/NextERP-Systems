const db = require('../config/database');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [users] = await db.execute(`
      SELECT u.*, 
             ap.total_credits, ap.completed_credits, ap.gpa, 
             ap.current_semester, ap.academic_year
      FROM users u
      LEFT JOIN academic_progress ap ON u.id = ap.user_id
      WHERE u.id = ?
    `, [userId]);

    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      user: users[0]
    });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch user profile' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { first_name, last_name, phone, profile_image } = req.body;

    await db.execute(`
      UPDATE users 
      SET first_name = ?, last_name = ?, phone = ?, profile_image = ?
      WHERE id = ?
    `, [first_name, last_name, phone, profile_image, userId]);

    res.json({
      success: true,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

// Get academic progress
const getAcademicProgress = async (req, res) => {
  try {
    const userId = req.user.userId;

    const [progress] = await db.execute(`
      SELECT ap.*, 
             COUNT(e.id) as enrolled_courses,
             COUNT(CASE WHEN e.grade IS NOT NULL THEN 1 END) as completed_courses
      FROM academic_progress ap
      LEFT JOIN enrollments e ON ap.user_id = e.user_id
      WHERE ap.user_id = ?
      GROUP BY ap.id
    `, [userId]);

    if (progress.length === 0) {
      // Create academic progress record if it doesn't exist
      await db.execute(`
        INSERT INTO academic_progress (user_id, current_semester, academic_year)
        VALUES (?, 'Fall 2024', 2024)
      `, [userId]);

      const [newProgress] = await db.execute('SELECT * FROM academic_progress WHERE user_id = ?', [userId]);
      return res.json({ success: true, progress: newProgress[0] });
    }

    res.json({
      success: true,
      progress: progress[0]
    });
  } catch (error) {
    console.error('Get academic progress error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch academic progress' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  getAcademicProgress
};
