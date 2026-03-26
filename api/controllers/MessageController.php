<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class MessageController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllMessages() {
        try {
            $query = "SELECT m.*, s.first_name as sender_first_name, s.last_name as sender_last_name,
                     r.first_name as receiver_first_name, r.last_name as receiver_last_name
                     FROM messages m 
                     JOIN users s ON m.sender_id = s.id 
                     LEFT JOIN users r ON m.receiver_id = r.id 
                     ORDER BY m.sent_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'messages' => $messages]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch messages: ' . $exception->getMessage()]);
        }
    }

    public function getMessage($id) {
        try {
            $query = "SELECT m.*, s.first_name as sender_first_name, s.last_name as sender_last_name,
                     r.first_name as receiver_first_name, r.last_name as receiver_last_name
                     FROM messages m 
                     JOIN users s ON m.sender_id = s.id 
                     LEFT JOIN users r ON m.receiver_id = r.id 
                     WHERE m.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $message = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'message' => $message]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Message not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch message: ' . $exception->getMessage()]);
        }
    }

    public function createMessage() {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($data->subject) || !isset($data->message_text)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Subject and message text are required']);
            return;
        }

        try {
            $query = "INSERT INTO messages (sender_id, receiver_id, subject, message_text, message_type, status) 
                     VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $user_id,
                $data->receiver_id ?? null,
                $data->subject,
                $data->message_text,
                $data->message_type ?? 'message',
                $data->status ?? 'unread'
            ]);

            $message_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Message sent successfully',
                'message_id' => $message_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to send message: ' . $exception->getMessage()]);
        }
    }

    public function updateMessage($id) {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "UPDATE messages SET status = ?, read_at = NOW() WHERE id = ? AND receiver_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->status ?? 'read',
                $id,
                $user_id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Message updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Message not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update message: ' . $exception->getMessage()]);
        }
    }

    public function deleteMessage($id) {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "DELETE FROM messages WHERE id = ? AND (sender_id = ? OR receiver_id = ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id, $user_id, $user_id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Message deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Message not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete message: ' . $exception->getMessage()]);
        }
    }

    public function getMyMessages() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "SELECT m.*, s.first_name as sender_first_name, s.last_name as sender_last_name,
                     r.first_name as receiver_first_name, r.last_name as receiver_last_name
                     FROM messages m 
                     JOIN users s ON m.sender_id = s.id 
                     LEFT JOIN users r ON m.receiver_id = r.id 
                     WHERE m.sender_id = ? OR m.receiver_id = ?
                     ORDER BY m.sent_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$user_id, $user_id]);

            $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'messages' => $messages]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch messages: ' . $exception->getMessage()]);
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
