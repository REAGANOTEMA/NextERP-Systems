# NextERP Backend Setup

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
Edit `.env` file with your database credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=nexterp
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

### 3. Setup MySQL Database
```bash
mysql -u root -p < database.sql
```

### 4. Start Server
```bash
npm run dev
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `GET /api/courses/user/enrolled` - Get user's enrolled courses
- `POST /api/courses/enroll` - Enroll in course

### Assignments
- `GET /api/assignments` - Get user's assignments
- `GET /api/assignments/:id` - Get assignment by ID
- `GET /api/assignments/stats` - Get assignment statistics
- `GET /api/assignments/week/:week` - Get assignments by week
- `GET /api/assignments/block/:block` - Get assignments by block

### Submissions
- `POST /api/submissions` - Submit assignment
- `GET /api/submissions` - Get user submissions
- `GET /api/submissions/:id` - Get submission by ID

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/academic-progress` - Get academic progress

### Messages
- `GET /api/messages` - Get user messages
- `POST /api/messages` - Send message
- `PUT /api/messages/:messageId/read` - Mark as read
- `GET /api/messages/unread/count` - Get unread count

### Documents
- `GET /api/documents` - Get user documents
- `POST /api/documents` - Upload document
- `DELETE /api/documents/:documentId` - Delete document

### Finances
- `GET /api/finances` - Get user finances
- `GET /api/finances/summary` - Get finance summary
- `POST /api/finances` - Add finance record

### Attendance
- `GET /api/attendance` - Get user attendance
- `GET /api/attendance/summary` - Get attendance summary
- `POST /api/attendance` - Mark attendance

## 🔐 Authentication

All protected routes require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## 📁 File Structure
```
backend/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management
│   ├── courseController.js  # Course management
│   ├── assignmentController.js # Assignment management
│   ├── submissionController.js # Submission management
│   ├── messageController.js # Message management
│   ├── documentController.js # Document management
│   ├── financeController.js # Finance management
│   └── attendanceController.js # Attendance management
├── routes/
│   ├── auth.js              # Auth routes
│   ├── users.js             # User routes
│   ├── courses.js           # Course routes
│   ├── assignments.js       # Assignment routes
│   ├── submissions.js       # Submission routes
│   ├── messages.js          # Message routes
│   ├── documents.js         # Document routes
│   ├── finances.js          # Finance routes
│   └── attendance.js        # Attendance routes
├── uploads/                 # File upload directory
├── .env                     # Environment variables
├── database.sql             # Database schema and sample data
├── package.json             # Dependencies
└── server.js               # Main server file
```

## 🛠️ Technologies Used
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **multer** - File uploads
- **helmet** - Security
- **cors** - Cross-origin resource sharing

## 📝 Sample Data

The database includes:
- 12 NextERP courses
- 28 assignments (14 weeks, 2 per week)
- Sample admin user (admin@nexterp.com / admin123)
- Sample student user (john.doe@nexterp.com / student123)

## 🔧 Development

For development with auto-reload:
```bash
npm run dev
```

For production:
```bash
npm start
```

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- http://localhost:5173
- http://localhost:5174
- http://192.168.1.16:5173
- http://192.168.1.16:5174

## 📊 Database Schema

The database includes tables for:
- users
- courses
- enrollments
- assignments
- submissions
- attendance
- messages
- documents
- finances
- academic_progress

## 🔒 Security Features

- JWT authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Input validation
- SQL injection prevention with prepared statements
