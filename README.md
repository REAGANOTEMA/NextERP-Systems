# Conerstone Software Company

A modern full-stack application with PHP backend and React frontend for educational management.

## 🏗️ **Project Structure**

```
Conerstone-software-company/
├── api/                          # PHP Backend API
│   ├── config/
│   │   ├── Database.php         # Database configuration
│   │   ├── JWT.php             # JWT authentication
│   │   └── headers.php         # CORS and headers
│   ├── controllers/
│   │   ├── UserController.php   # User management
│   │   ├── CourseController.php # Course management
│   │   ├── AssignmentController.php # Assignment management
│   │   └── SubmissionController.php # Submission management
│   ├── auth.php                 # Authentication routes
│   ├── courses.php             # Course routes
│   ├── assignments.php         # Assignment routes
│   ├── submissions.php        # Submission routes
│   └── health.php              # Health check
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── services/
│   │   │   └── api.ts         # API service
│   │   ├── hooks/
│   │   │   └── useApi.ts      # React hooks for API
│   │   ├── components/         # React components
│   │   ├── pages/             # Page components
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── .htaccess                   # Apache routing configuration
└── README.md                   # This file
```

## 🚀 **Getting Started**

### **Prerequisites**
- XAMPP (Apache + MySQL + PHP)
- Node.js (for frontend development)
- Modern web browser

### **Database Setup**
1. Start Apache and MySQL from XAMPP Control Panel
2. Open phpMyAdmin: http://localhost/phpmyadmin
3. Create database: `conerstone-software-company`
4. Import the SQL schema from the project setup

### **Backend Setup (PHP)**
The PHP backend is ready to use with XAMPP:
- Database: `conerstone-software-company`
- API Base URL: `http://localhost/api`
- Health Check: `http://localhost/api/health`

### **Frontend Setup (React)**
```bash
cd frontend
npm install
npm run dev
```

## 📡 **API Endpoints**

### **Authentication**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### **Courses**
- `GET /api/courses` - Get all courses
- `GET /api/courses/{id}` - Get specific course
- `POST /api/courses` - Create new course
- `PUT /api/courses/{id}` - Update course
- `DELETE /api/courses/{id}` - Delete course

### **Assignments**
- `GET /api/assignments` - Get all assignments
- `GET /api/assignments/{id}` - Get specific assignment
- `POST /api/assignments` - Create new assignment
- `PUT /api/assignments/{id}` - Update assignment
- `DELETE /api/assignments/{id}` - Delete assignment

### **Submissions**
- `GET /api/submissions` - Get all submissions
- `GET /api/submissions/{id}` - Get specific submission
- `POST /api/submissions` - Create new submission
- `PUT /api/submissions/{id}` - Update submission
- `DELETE /api/submissions/{id}` - Delete submission

### **Health Check**
- `GET /api/health` - API health check

## 🔧 **Technology Stack**

### **Backend**
- **PHP 8.2+** - Core backend language
- **MySQL** - Database
- **JWT** - Authentication
- **PDO** - Database connectivity

### **Frontend**
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

### **Development Tools**
- **XAMPP** - Local server environment
- **npm** - Package management

## 🔐 **Security Features**

- JWT-based authentication
- Password hashing with PHP's password_hash()
- CORS configuration
- SQL injection prevention with prepared statements
- Input validation and sanitization

## 📝 **Usage Instructions**

1. **Start the servers**: Launch Apache and MySQL via XAMPP
2. **Access the application**: Navigate to `http://localhost`
3. **Register a new user**: Create an account to get started
4. **Explore features**: Create courses, assignments, and manage submissions

## 🤝 **Development**

### **Adding New Features**
1. Create PHP controller in `api/controllers/`
2. Add route handler in appropriate `api/*.php` file
3. Update React API service in `frontend/src/services/api.ts`
4. Create React hooks in `frontend/src/hooks/useApi.ts`

### **Database Changes**
- Update database schema
- Modify PHP controllers accordingly
- Update TypeScript interfaces in frontend

## 📞 **Support**

For issues and questions:
- Check the API health: `http://localhost/api/health`
- Verify database connection
- Review browser console for errors
- Check Apache/PHP error logs

---

**Conerstone Software Company** - Modern Educational Management System
