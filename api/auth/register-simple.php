<?php
/**
 * Simple Registration Controller - No Strict Validation
 * Focus on making registration work
 */

require_once '../config/Database.php';
require_once '../config/headers.php';

class SimpleRegisterController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function register() {
        try {
            // Get raw input
            $json_input = file_get_contents("php://input");
            $data = json_decode($json_input);

            // Debug: Log what we received
            error_log("Registration attempt - Raw input: " . $json_input);
            error_log("Registration attempt - Parsed data: " . print_r($data, true));

            // Basic validation
            if (!$data || !isset($data->email) || !isset($data->password) || !isset($data->first_name) || !isset($data->last_name)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false, 
                    'message' => 'Missing required fields: first_name, last_name, email, password'
                ]);
                return;
            }

            // Basic email validation
            if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Invalid email format']);
                return;
            }

            // Check if user already exists
            $check_query = "SELECT id FROM users WHERE email = ?";
            $check_stmt = $this->conn->prepare($check_query);
            $check_stmt->execute([$data->email]);

            if ($check_stmt->rowCount() > 0) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Email already registered']);
                return;
            }

            // Hash password
            $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

            // Insert user with all possible fields
            $query = "INSERT INTO users (first_name, last_name, email, password, role, phone, bio, location, is_approved) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)";
            
            $stmt = $this->conn->prepare($query);
            $success = $stmt->execute([
                $data->first_name ?? '',
                $data->last_name ?? '',
                $data->email,
                $hashed_password,
                $data->role ?? 'student',
                $data->phone ?? null,
                $data->bio ?? null,
                $data->location ?? null
            ]);

            if (!$success) {
                error_log("Database insert failed: " . print_r($stmt->errorInfo(), true));
                http_response_code(500);
                echo json_encode(['success' => false, 'message' => 'Database insert failed']);
                return;
            }

            $user_id = $this->conn->lastInsertId();

            // Generate JWT token
            require_once '../config/JWT.php';
            $jwt = new JWT();
            $token = $jwt->encode(['user_id' => $user_id, 'role' => $data->role ?? 'student']);

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Registration successful! Welcome to Conerstone Software Company',
                'token' => $token,
                'user' => [
                    'id' => $user_id,
                    'first_name' => $data->first_name,
                    'last_name' => $data->last_name,
                    'email' => $data->email,
                    'role' => $data->role ?? 'student',
                    'phone' => $data->phone ?? null,
                    'bio' => $data->bio ?? null,
                    'location' => $data->location ?? null
                ]
            ]);

        } catch(Exception $e) {
            error_log("Registration error: " . $e->getMessage());
            http_response_code(500);
            echo json_encode([
                'success' => false, 
                'message' => 'Registration failed: ' . $e->getMessage()
            ]);
        }
    }
}

// Handle the request
$controller = new SimpleRegisterController();
$controller->register();
?>
