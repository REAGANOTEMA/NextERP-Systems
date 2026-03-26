<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class CourseController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllCourses() {
        try {
            $query = "SELECT * FROM courses WHERE status = 'active' ORDER BY course_name";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'courses' => $courses]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch courses: ' . $exception->getMessage()]);
        }
    }

    public function getCourse($id) {
        try {
            $query = "SELECT * FROM courses WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $course = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'course' => $course]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Course not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch course: ' . $exception->getMessage()]);
        }
    }

    public function createCourse() {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->course_code) || !isset($data->course_name)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Course code and name are required']);
            return;
        }

        try {
            $query = "INSERT INTO courses (course_code, course_name, description, credits, instructor, semester, year) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->course_code,
                $data->course_name,
                $data->description ?? '',
                $data->credits ?? 3,
                $data->instructor ?? '',
                $data->semester ?? '',
                $data->year ?? date('Y')
            ]);

            $course_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Course created successfully',
                'course_id' => $course_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to create course: ' . $exception->getMessage()]);
        }
    }

    public function updateCourse($id) {
        $data = json_decode(file_get_contents("php://input"));

        try {
            $query = "UPDATE courses SET course_code = ?, course_name = ?, description = ?, 
                     credits = ?, instructor = ?, semester = ?, year = ? WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->course_code,
                $data->course_name,
                $data->description ?? '',
                $data->credits ?? 3,
                $data->instructor ?? '',
                $data->semester ?? '',
                $data->year ?? date('Y'),
                $id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Course updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Course not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update course: ' . $exception->getMessage()]);
        }
    }

    public function deleteCourse($id) {
        try {
            $query = "DELETE FROM courses WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Course deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Course not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete course: ' . $exception->getMessage()]);
        }
    }
}
?>
