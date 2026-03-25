-- NextERP Database Schema
-- MySQL Database Setup

-- Create database
CREATE DATABASE IF NOT EXISTS nexterp;
USE nexterp;

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin', 'faculty') DEFAULT 'student',
    phone VARCHAR(20),
    profile_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(20) UNIQUE NOT NULL,
    course_name VARCHAR(200) NOT NULL,
    description TEXT,
    credits INT NOT NULL DEFAULT 3,
    instructor VARCHAR(100),
    semester VARCHAR(50),
    year INT,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrollments table
CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,
    status ENUM('enrolled', 'dropped', 'completed') DEFAULT 'enrolled',
    grade VARCHAR(5),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE KEY unique_enrollment (user_id, course_id)
);

-- Assignments table
CREATE TABLE assignments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    course_id INT NOT NULL,
    week_number INT NOT NULL,
    block_number INT NOT NULL,
    due_date DATE NOT NULL,
    points INT NOT NULL DEFAULT 100,
    assignment_type ENUM('project', 'coding', 'design', 'exercise', 'theory', 'exam', 'presentation', 'analysis', 'practical', 'research', 'media') DEFAULT 'project',
    status ENUM('draft', 'published', 'closed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Submissions table
CREATE TABLE submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    assignment_id INT NOT NULL,
    user_id INT NOT NULL,
    submission_text TEXT,
    file_path VARCHAR(255),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('draft', 'submitted', 'graded') DEFAULT 'draft',
    points_earned INT DEFAULT 0,
    feedback TEXT,
    FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_submission (assignment_id, user_id)
);

-- Attendance table
CREATE TABLE attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    attendance_date DATE NOT NULL,
    status ENUM('present', 'absent', 'late') DEFAULT 'present',
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE KEY unique_attendance (user_id, course_id, attendance_date)
);

-- Messages table
CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT,
    subject VARCHAR(200) NOT NULL,
    message_text TEXT NOT NULL,
    message_type ENUM('message', 'announcement', 'notification') DEFAULT 'message',
    status ENUM('unread', 'read', 'archived') DEFAULT 'unread',
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Documents table
CREATE TABLE documents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    file_path VARCHAR(255) NOT NULL,
    file_type VARCHAR(50),
    file_size INT,
    uploaded_by INT NOT NULL,
    category VARCHAR(50),
    is_public BOOLEAN DEFAULT FALSE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Finances table
CREATE TABLE finances (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    transaction_type ENUM('payment', 'fee', 'refund', 'scholarship') DEFAULT 'payment',
    amount DECIMAL(10,2) NOT NULL,
    description VARCHAR(255),
    due_date DATE,
    paid_date DATE,
    status ENUM('pending', 'paid', 'overdue', 'cancelled') DEFAULT 'pending',
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Academic progress table
CREATE TABLE academic_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_credits INT DEFAULT 0,
    completed_credits INT DEFAULT 0,
    gpa DECIMAL(3,2) DEFAULT 0.00,
    current_semester VARCHAR(50),
    academic_year INT,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert sample data

-- Sample courses
INSERT INTO courses (course_code, course_name, description, credits, instructor, semester, year) VALUES
('PRG201', 'Programming (Web Programming)', 'Introduction to web development with modern frameworks', 4, 'Dr. Reagan Otema', 'Fall', 2024),
('PRG202', 'Programming (Computer Programming)', 'Advanced programming concepts and algorithms', 4, 'Prof. Binsobedde Najiib', 'Fall', 2024),
('DPO101', 'Microsoft Office Suite', 'Comprehensive Microsoft Office applications training', 3, 'Faculty Team', 'Fall', 2024),
('CMD220', 'Graphics Design & Digital Media', 'Digital design principles and media production', 3, 'Creative Media Faculty', 'Fall', 2024),
('NET301', 'Networking Fundamentals', 'Introduction to computer networks and protocols', 3, 'Network Faculty', 'Fall', 2024),
('DBS201', 'Database Management Systems', 'Database design and SQL programming', 3, 'Database Faculty', 'Fall', 2024),
('SEC301', 'Cybersecurity Essentials', 'Information security and network protection', 3, 'Security Faculty', 'Fall', 2024),
('CLO201', 'Cloud Computing', 'Cloud architecture and deployment strategies', 3, 'Cloud Faculty', 'Fall', 2024),
('MOB301', 'Mobile Development', 'Cross-platform mobile application development', 3, 'Mobile Faculty', 'Fall', 2024),
('PRO401', 'Professional Development', 'Career development and professional skills', 2, 'Prof. Development Faculty', 'Fall', 2024),
('ENT301', 'Entrepreneurship', 'Business development and startup strategies', 3, 'Business Faculty', 'Fall', 2024),
('MKT201', 'Digital Marketing', 'Online marketing strategies and analytics', 3, 'Marketing Faculty', 'Fall', 2024);

-- Sample assignments (28 assignments for 14 weeks)
INSERT INTO assignments (title, description, course_id, week_number, block_number, due_date, points, assignment_type) VALUES
-- Week 1
('Introduction to Web Development - HTML Basics', 'Create a basic HTML structure for a personal portfolio website with semantic tags.', 1, 1, 1, '2024-03-28', 50, 'project'),
('Computer Programming Fundamentals', 'Write basic programs demonstrating fundamental programming concepts.', 2, 1, 1, '2024-03-29', 60, 'coding'),
-- Week 2
('CSS Styling and Layout', 'Style the portfolio with CSS, implementing responsive design principles.', 1, 2, 1, '2024-04-04', 70, 'design'),
('Data Types and Variables', 'Complete exercises on data types, variables, and basic operations.', 2, 2, 1, '2024-04-05', 50, 'exercise'),
-- Week 3
('JavaScript DOM Manipulation', 'Add interactive elements to the portfolio using JavaScript.', 1, 3, 1, '2024-04-11', 80, 'coding'),
('Control Structures', 'Implement programs using loops, conditionals, and functions.', 2, 3, 1, '2024-04-12', 70, 'coding'),
-- Week 4
('Responsive Web Design', 'Ensure portfolio works perfectly on all device sizes.', 1, 4, 1, '2024-04-18', 60, 'practical'),
('Arrays and Objects', 'Work with complex data structures and algorithms.', 2, 4, 1, '2024-04-19', 80, 'coding'),
-- Week 5
('Word Processing Project', 'Create professional documents using Microsoft Word.', 3, 5, 1, '2024-04-25', 40, 'practical'),
('Error Handling and Debugging', 'Implement robust error handling in programs.', 2, 5, 1, '2024-04-26', 70, 'coding'),
-- Week 6
('Excel Data Analysis', 'Analyze sample data using Excel functions and charts.', 3, 6, 1, '2024-05-02', 50, 'analysis'),
('Object-Oriented Programming', 'Design and implement classes and objects.', 2, 6, 1, '2024-05-03', 90, 'coding'),
-- Week 7
('PowerPoint Presentation', 'Create engaging presentation slides for a tech topic.', 3, 7, 1, '2024-05-09', 45, 'presentation'),
('Mid-term Project', 'Develop a complete application demonstrating learned concepts.', 2, 7, 1, '2024-05-10', 150, 'project'),
-- Week 8
('Network Configuration Basics', 'Configure basic network settings and test connectivity.', 5, 8, 2, '2024-05-16', 60, 'practical'),
('Database Design Project', 'Design a complete database schema for a business case.', 6, 8, 2, '2024-05-17', 100, 'project'),
-- Week 9
('Security Fundamentals', 'Implement basic security measures and analyze threats.', 7, 9, 2, '2024-05-23', 70, 'practical'),
('SQL Queries and Reports', 'Write complex SQL queries and generate reports.', 6, 9, 2, '2024-05-24', 80, 'analysis'),
-- Week 10
('Cloud Service Deployment', 'Deploy a simple application to cloud platform.', 8, 10, 2, '2024-05-30', 90, 'project'),
('UI/UX Design Principles', 'Design user interface for mobile application.', 4, 10, 2, '2024-05-31', 70, 'design'),
-- Week 11
('Mobile App Development', 'Create a cross-platform mobile application.', 9, 11, 2, '2024-06-06', 100, 'project'),
('Professional Communication', 'Deliver professional presentation and write business correspondence.', 10, 11, 2, '2024-06-07', 40, 'presentation'),
-- Week 12
('Entrepreneurship - Business Plan', 'Develop comprehensive business plan for tech startup.', 11, 12, 2, '2024-06-13', 90, 'research'),
('Digital Marketing - SEO & Analytics', 'Implement SEO strategies and analyze website traffic.', 12, 12, 2, '2024-06-14', 60, 'practical'),
-- Week 13
('Network Security Implementation', 'Implement security measures for network infrastructure.', 7, 13, 2, '2024-06-20', 85, 'practical'),
('Video Production & Editing', 'Produce and edit professional video content.', 4, 13, 2, '2024-06-21', 70, 'media'),
-- Week 14
('Final Comprehensive Project', 'Develop complete full-stack application with all learned technologies.', 1, 14, 2, '2024-06-27', 200, 'project'),
('Final Assessment - All Courses', 'Comprehensive final exam covering all subjects from the semester.', 0, 14, 2, '2024-06-28', 150, 'exam');

-- Sample admin user (password: admin123)
INSERT INTO users (student_id, first_name, last_name, email, password_hash, role) VALUES
('ADMIN001', 'Admin', 'User', 'admin@nexterp.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Sample student user (password: student123)
INSERT INTO users (student_id, first_name, last_name, email, password_hash, role) VALUES
('STU001', 'John', 'Doe', 'john.doe@nexterp.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student');
