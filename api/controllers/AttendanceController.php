<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class AttendanceController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllAttendance() {
        try {
            $query = "SELECT a.*, u.first_name, u.last_name, c.course_name 
                     FROM attendance a 
                     JOIN users u ON a.user_id = u.id 
                     JOIN courses c ON a.course_id = c.id 
                     ORDER BY a.attendance_date DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $attendance = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'attendance' => $attendance]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch attendance: ' . $exception->getMessage()]);
        }
    }

    public function getAttendance($id) {
        try {
            $query = "SELECT a.*, u.first_name, u.last_name, c.course_name 
                     FROM attendance a 
                     JOIN users u ON a.user_id = u.id 
                     JOIN courses c ON a.course_id = c.id 
                     WHERE a.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $attendance = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'attendance' => $attendance]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Attendance record not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch attendance: ' . $exception->getMessage()]);
        }
    }

    public function createAttendance() {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($data->course_id) || !isset($data->attendance_date)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Course ID and attendance date are required']);
            return;
        }

        try {
            $query = "INSERT INTO attendance (user_id, course_id, attendance_date, status, notes) 
                     VALUES (?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $user_id,
                $data->course_id,
                $data->attendance_date,
                $data->status ?? 'present',
                $data->notes ?? ''
            ]);

            $attendance_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Attendance recorded successfully',
                'attendance_id' => $attendance_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to record attendance: ' . $exception->getMessage()]);
        }
    }

    public function updateAttendance($id) {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "UPDATE attendance SET course_id = ?, attendance_date = ?, status = ?, notes = ? 
                     WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->course_id,
                $data->attendance_date,
                $data->status ?? 'present',
                $data->notes ?? '',
                $id,
                $user_id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Attendance updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Attendance record not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update attendance: ' . $exception->getMessage()]);
        }
    }

    public function deleteAttendance($id) {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "DELETE FROM attendance WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id, $user_id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Attendance deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Attendance record not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete attendance: ' . $exception->getMessage()]);
        }
    }

    private function getUserIdFromToken() {
        $headers = getallheaders();
        $auth_header = $headers['Authorization'] ?? $headers['authorization'] ?? '';

        if (strpos($auth_header, 'Bearer ') === 0) {
            $token = substr($auth_header, 7);
            require_once '../config/JWT.php';
            $jwt = new JWT();
            
            if ($jwt->verify($token)) {
                $payload = $jwt->decode($token);
                return $payload['user_id'];
            }
        }
        return false;
    }
}
?>
