<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class AssignmentController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllAssignments() {
        try {
            $query = "SELECT a.*, c.course_name, c.course_code 
                     FROM assignments a 
                     JOIN courses c ON a.course_id = c.id 
                     ORDER BY a.due_date ASC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $assignments = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'assignments' => $assignments]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch assignments: ' . $exception->getMessage()]);
        }
    }

    public function getAssignment($id) {
        try {
            $query = "SELECT a.*, c.course_name, c.course_code 
                     FROM assignments a 
                     JOIN courses c ON a.course_id = c.id 
                     WHERE a.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $assignment = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'assignment' => $assignment]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Assignment not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch assignment: ' . $exception->getMessage()]);
        }
    }

    public function createAssignment() {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->title) || !isset($data->course_id)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Title and course ID are required']);
            return;
        }

        try {
            $query = "INSERT INTO assignments (title, description, course_id, week_number, block_number, due_date, points, assignment_type, status) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->title,
                $data->description ?? '',
                $data->course_id,
                $data->week_number ?? 1,
                $data->block_number ?? 1,
                $data->due_date ?? date('Y-m-d'),
                $data->points ?? 100,
                $data->assignment_type ?? 'project',
                $data->status ?? 'draft'
            ]);

            $assignment_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Assignment created successfully',
                'assignment_id' => $assignment_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to create assignment: ' . $exception->getMessage()]);
        }
    }

    public function updateAssignment($id) {
        $data = json_decode(file_get_contents("php://input"));

        try {
            $query = "UPDATE assignments SET title = ?, description = ?, course_id = ?, 
                     week_number = ?, block_number = ?, due_date = ?, points = ?, 
                     assignment_type = ?, status = ? WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->title,
                $data->description ?? '',
                $data->course_id,
                $data->week_number ?? 1,
                $data->block_number ?? 1,
                $data->due_date ?? date('Y-m-d'),
                $data->points ?? 100,
                $data->assignment_type ?? 'project',
                $data->status ?? 'draft',
                $id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Assignment updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Assignment not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update assignment: ' . $exception->getMessage()]);
        }
    }

    public function deleteAssignment($id) {
        try {
            $query = "DELETE FROM assignments WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Assignment deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Assignment not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete assignment: ' . $exception->getMessage()]);
        }
    }
}
?>
