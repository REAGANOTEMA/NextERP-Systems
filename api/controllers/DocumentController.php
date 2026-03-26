<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class DocumentController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllDocuments() {
        try {
            $query = "SELECT d.*, u.first_name, u.last_name 
                     FROM documents d 
                     JOIN users u ON d.uploaded_by = u.id 
                     ORDER BY d.uploaded_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $documents = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'documents' => $documents]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch documents: ' . $exception->getMessage()]);
        }
    }

    public function getDocument($id) {
        try {
            $query = "SELECT d.*, u.first_name, u.last_name 
                     FROM documents d 
                     JOIN users u ON d.uploaded_by = u.id 
                     WHERE d.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $document = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'document' => $document]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Document not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch document: ' . $exception->getMessage()]);
        }
    }

    public function createDocument() {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($data->title) || !isset($data->file_path)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Title and file path are required']);
            return;
        }

        try {
            $query = "INSERT INTO documents (title, description, file_path, file_type, file_size, uploaded_by, category, is_public) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->title,
                $data->description ?? '',
                $data->file_path,
                $data->file_type ?? '',
                $data->file_size ?? 0,
                $user_id,
                $data->category ?? '',
                $data->is_public ?? false
            ]);

            $document_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Document uploaded successfully',
                'document_id' => $document_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to upload document: ' . $exception->getMessage()]);
        }
    }

    public function updateDocument($id) {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "UPDATE documents SET title = ?, description = ?, file_type = ?, 
                     file_size = ?, category = ?, is_public = ? 
                     WHERE id = ? AND uploaded_by = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->title,
                $data->description ?? '',
                $data->file_type ?? '',
                $data->file_size ?? 0,
                $data->category ?? '',
                $data->is_public ?? false,
                $id,
                $user_id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Document updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Document not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update document: ' . $exception->getMessage()]);
        }
    }

    public function deleteDocument($id) {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "DELETE FROM documents WHERE id = ? AND uploaded_by = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id, $user_id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Document deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Document not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete document: ' . $exception->getMessage()]);
        }
    }

    public function uploadFile() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($_FILES['file'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'No file uploaded']);
            return;
        }

        $file = $_FILES['file'];
        $upload_dir = '../uploads/documents/';
        
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        $file_name = time() . '_' . basename($file['name']);
        $file_path = $upload_dir . $file_name;

        if (move_uploaded_file($file['tmp_name'], $file_path)) {
            $file_type = $file['type'];
            $file_size = $file['size'];

            try {
                $query = "INSERT INTO documents (title, description, file_path, file_type, file_size, uploaded_by, category, is_public) 
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $this->conn->prepare($query);
                $stmt->execute([
                    $_POST['title'] ?? $file['name'],
                    $_POST['description'] ?? '',
                    'uploads/documents/' . $file_name,
                    $file_type,
                    $file_size,
                    $user_id,
                    $_POST['category'] ?? '',
                    $_POST['is_public'] ?? false
                ]);

                $document_id = $this->conn->lastInsertId();

                http_response_code(201);
                echo json_encode([
                    'success' => true,
                    'message' => 'File uploaded successfully',
                    'document_id' => $document_id,
                    'file_path' => 'uploads/documents/' . $file_name
                ]);
            } catch(PDOException $exception) {
                http_response_code(500);
                echo json_encode(['success' => false, 'message' => 'Failed to save document info: ' . $exception->getMessage()]);
            }
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to upload file']);
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
