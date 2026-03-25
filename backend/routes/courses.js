const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');
const { getAllCourses, getCourseById, getUserCourses, enrollInCourse } = require('../controllers/courseController');

// Get all courses
router.get('/', getAllCourses);

// Get course by ID
router.get('/:id', getCourseById);

// Get user's enrolled courses (protected)
router.get('/user/enrolled', verifyToken, getUserCourses);

// Enroll in course (protected)
router.post('/enroll', verifyToken, enrollInCourse);

module.exports = router;
