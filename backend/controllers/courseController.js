const db = require('../config/database');
const { verifyToken } = require('./auth');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const [courses] = await db.execute(`
      SELECT c.*, 
             COUNT(e.id) as enrolled_students
      FROM courses c
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.status = 'enrolled'
      WHERE c.status = 'active'
      GROUP BY c.id
      ORDER BY c.course_code
    `);

    res.json({
      success: true,
      courses
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch courses' });
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [courses] = await db.execute(`
      SELECT c.*, 
             COUNT(e.id) as enrolled_students
      FROM courses c
      LEFT JOIN enrollments e ON c.id = e.course_id AND e.status = 'enrolled'
      WHERE c.id = ? AND c.status = 'active'
      GROUP BY c.id
    `, [id]);

    if (courses.length === 0) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.json({
      success: true,
      course: courses[0]
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch course' });
  }
};

// Get user's enrolled courses
const getUserCourses = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    const [enrollments] = await db.execute(`
      SELECT c.*, e.enrollment_date, e.status as enrollment_status, e.grade
      FROM courses c
      INNER JOIN enrollments e ON c.id = e.course_id
      WHERE e.user_id = ? AND e.status = 'enrolled'
      ORDER BY c.course_code
    `, [userId]);

    res.json({
      success: true,
      courses: enrollments
    });
  } catch (error) {
    console.error('Get user courses error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch enrolled courses' });
  }
};

// Enroll in course
const enrollInCourse = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.body;

    // Check if already enrolled
    const [existing] = await db.execute(
      'SELECT id FROM enrollments WHERE user_id = ? AND course_id = ?',
      [userId, courseId]
    );

    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: 'Already enrolled in this course' });
    }

    // Check if course exists and is active
    const [courses] = await db.execute(
      'SELECT id FROM courses WHERE id = ? AND status = "active"',
      [courseId]
    );

    if (courses.length === 0) {
      return res.status(404).json({ success: false, message: 'Course not found or inactive' });
    }

    // Enroll user
    await db.execute(
      'INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES (?, ?, CURDATE())',
      [userId, courseId]
    );

    res.json({
      success: true,
      message: 'Successfully enrolled in course'
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ success: false, message: 'Failed to enroll in course' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  getUserCourses,
  enrollInCourse
};
