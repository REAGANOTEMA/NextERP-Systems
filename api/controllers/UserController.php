<?php
require_once '../config/Database.php';
require_once '../config/headers.php';
require_once '../config/Validator.php';
require_once '../config/ErrorHandler.php';

class UserController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function register() {
        $data = json_decode(file_get_contents("php://input"));

        // Validate required fields
        ErrorHandler::validateAndSendError($data, ['student_id', 'first_name', 'last_name', 'email', 'password']);
        
        // Validate email format
        ErrorHandler::validateEmailAndSendError($data->email);
        
        // Validate password strength
        ErrorHandler::validatePasswordAndSendError($data->password);
        
        // Validate student ID format
        if (!Validator::validateStudentId($data->student_id)) {
            ErrorHandler::sendErrorResponse('Student ID must be 3-10 characters (letters and numbers only)');
        }

        // Sanitize inputs
        $sanitizedData = [
            'student_id' => Validator::sanitizeString($data->student_id),
            'first_name' => Validator::sanitizeString($data->first_name),
            'last_name' => Validator::sanitizeString($data->last_name),
            'email' => Validator::sanitizeEmail($data->email),
            'password' => $data->password,
            'role' => Validator::sanitizeString($data->role ?? 'student')
        ];

        try {
            // Check if user already exists
            $check_query = "SELECT id FROM users WHERE email = ? OR student_id = ?";
            $check_stmt = $this->conn->prepare($check_query);
            $check_stmt->execute([$data->email, $data->student_id]);

            if ($check_stmt->rowCount() > 0) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'User already exists']);
                return;
            }

            // Hash password
            $password_hash = password_hash($data->password, PASSWORD_DEFAULT);

            // Create user
            $query = "INSERT INTO users (student_id, first_name, last_name, email, password_hash, role) 
                     VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $data->student_id,
                $data->first_name,
                $data->last_name,
                $data->email,
                $password_hash,
                $data->role ?? 'student'
            ]);

            $user_id = $this->conn->lastInsertId();

            // Generate token
            require_once '../config/JWT.php';
            $jwt = new JWT();
            $token = $jwt->encode(['user_id' => $user_id, 'role' => $data->role ?? 'student']);

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'User registered successfully',
                'token' => $token,
                'user' => [
                    'id' => $user_id,
                    'student_id' => $data->student_id,
                    'first_name' => $data->first_name,
                    'last_name' => $data->last_name,
                    'email' => $data->email,
                    'role' => $data->role ?? 'student'
                ]
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $exception->getMessage()]);
        }
    }

    public function login() {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->email) || !isset($data->password)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Email and password are required']);
            return;
        }

        try {
            $query = "SELECT id, student_id, first_name, last_name, email, password_hash, role 
                     FROM users WHERE email = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$data->email]);

            if ($stmt->rowCount() > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);

                if (password_verify($data->password, $user['password_hash'])) {
                    require_once '../config/JWT.php';
                    $jwt = new JWT();
                    $token = $jwt->encode(['user_id' => $user['id'], 'role' => $user['role']]);

                    unset($user['password_hash']);

                    echo json_encode([
                        'success' => true,
                        'message' => 'Login successful',
                        'token' => $token,
                        'user' => $user
                    ]);
                } else {
                    http_response_code(401);
                    echo json_encode(['success' => false, 'message' => 'Invalid password']);
                }
            } else {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'User not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Login failed: ' . $exception->getMessage()]);
        }
    }

    public function getProfile() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "SELECT u.*, ap.total_credits, ap.completed_credits, ap.gpa, 
                     ap.current_semester, ap.academic_year
                     FROM users u
                     LEFT JOIN academic_progress ap ON u.id = ap.user_id
                     WHERE u.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$user_id]);

            if ($stmt->rowCount() > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                unset($user['password_hash']);
                echo json_encode(['success' => true, 'user' => $user]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'User not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch profile: ' . $exception->getMessage()]);
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
