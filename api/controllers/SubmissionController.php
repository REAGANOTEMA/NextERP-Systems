<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

require_once '../config/Database.php';
require_once '../config/headers.php';

class SubmissionController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllSubmissions() {
        try {
            $query = "SELECT s.*, a.title as assignment_title, u.first_name, u.last_name, c.course_name 
                     FROM submissions s 
                     JOIN assignments a ON s.assignment_id = a.id 
                     JOIN users u ON s.user_id = u.id 
                     JOIN courses c ON a.course_id = c.id 
                     ORDER BY s.submitted_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'submissions' => $submissions]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch submissions: ' . $exception->getMessage()]);
        }
    }

    public function getSubmission($id) {
        try {
            $query = "SELECT s.*, a.title as assignment_title, u.first_name, u.last_name, c.course_name 
                     FROM submissions s 
                     JOIN assignments a ON s.assignment_id = a.id 
                     JOIN users u ON s.user_id = u.id 
                     JOIN courses c ON a.course_id = c.id 
                     WHERE s.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $submission = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'submission' => $submission]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Submission not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch submission: ' . $exception->getMessage()]);
        }
    }

    public function createSubmission() {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($data->assignment_id)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Assignment ID is required']);
            return;
        }

        try {
            $query = "INSERT INTO submissions (assignment_id, user_id, submission_text, file_path, status) 
                     VALUES (?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->assignment_id,
                $user_id,
                $data->submission_text ?? '',
                $data->file_path ?? '',
                $data->status ?? 'submitted'
            ]);

            $submission_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Submission created successfully',
                'submission_id' => $submission_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to create submission: ' . $exception->getMessage()]);
        }
    }

    public function updateSubmission($id) {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "UPDATE submissions SET submission_text = ?, file_path = ?, status = ?, 
                     points_earned = ?, feedback = ? WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->submission_text ?? '',
                $data->file_path ?? '',
                $data->status ?? 'submitted',
                $data->points_earned ?? 0,
                $data->feedback ?? '',
                $id,
                $user_id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Submission updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Submission not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update submission: ' . $exception->getMessage()]);
        }
    }

    public function deleteSubmission($id) {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "DELETE FROM submissions WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id, $user_id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Submission deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Submission not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete submission: ' . $exception->getMessage()]);
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
