<?php
require_once '../config/Database.php';
require_once '../config/headers.php';

class FinanceController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllFinances() {
        try {
            $query = "SELECT f.*, u.first_name, u.last_name 
                     FROM finances f 
                     JOIN users u ON f.user_id = u.id 
                     ORDER BY f.created_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $finances = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'finances' => $finances]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch finances: ' . $exception->getMessage()]);
        }
    }

    public function getFinance($id) {
        try {
            $query = "SELECT f.*, u.first_name, u.last_name 
                     FROM finances f 
                     JOIN users u ON f.user_id = u.id 
                     WHERE f.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);

            if ($stmt->rowCount() > 0) {
                $finance = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['success' => true, 'finance' => $finance]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Finance record not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch finance record: ' . $exception->getMessage()]);
        }
    }

    public function createFinance() {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        if (!isset($data->amount) || !isset($data->transaction_type)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Amount and transaction type are required']);
            return;
        }

        try {
            $query = "INSERT INTO finances (user_id, transaction_type, amount, description, due_date, paid_date, status, payment_method) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $user_id,
                $data->transaction_type,
                $data->amount,
                $data->description ?? '',
                $data->due_date ?? null,
                $data->paid_date ?? null,
                $data->status ?? 'pending',
                $data->payment_method ?? ''
            ]);

            $finance_id = $this->conn->lastInsertId();

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Finance record created successfully',
                'finance_id' => $finance_id
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to create finance record: ' . $exception->getMessage()]);
        }
    }

    public function updateFinance($id) {
        $data = json_decode(file_get_contents("php://input"));
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "UPDATE finances SET transaction_type = ?, amount = ?, description = ?, 
                     due_date = ?, paid_date = ?, status = ?, payment_method = ? 
                     WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->transaction_type,
                $data->amount,
                $data->description ?? '',
                $data->due_date ?? null,
                $data->paid_date ?? null,
                $data->status ?? 'pending',
                $data->payment_method ?? '',
                $id,
                $user_id
            ]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Finance record updated successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Finance record not found or no changes made']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to update finance record: ' . $exception->getMessage()]);
        }
    }

    public function deleteFinance($id) {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "DELETE FROM finances WHERE id = ? AND user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id, $user_id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Finance record deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'Finance record not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to delete finance record: ' . $exception->getMessage()]);
        }
    }

    public function getMyFinances() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "SELECT f.*, u.first_name, u.last_name 
                     FROM finances f 
                     JOIN users u ON f.user_id = u.id 
                     WHERE f.user_id = ?
                     ORDER BY f.created_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$user_id]);

            $finances = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'finances' => $finances]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch finances: ' . $exception->getMessage()]);
        }
    }

    public function getFinanceSummary() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "SELECT 
                     SUM(CASE WHEN transaction_type = 'payment' THEN amount ELSE 0 END) as total_payments,
                     SUM(CASE WHEN transaction_type = 'fee' THEN amount ELSE 0 END) as total_fees,
                     SUM(CASE WHEN transaction_type = 'refund' THEN amount ELSE 0 END) as total_refunds,
                     SUM(CASE WHEN transaction_type = 'scholarship' THEN amount ELSE 0 END) as total_scholarships,
                     SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) as pending_amount,
                     SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) as paid_amount
                     FROM finances WHERE user_id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$user_id]);

            $summary = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'summary' => $summary]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch finance summary: ' . $exception->getMessage()]);
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
