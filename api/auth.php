<?php
require_once '../controllers/UserController.php';

$userController = new UserController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'auth') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'POST':
        if (isset($path_parts[2]) && $path_parts[2] === 'register') {
            $userController->register();
        } elseif (isset($path_parts[2]) && $path_parts[2] === 'login') {
            $userController->login();
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Route not found']);
        }
        break;
    case 'GET':
        if (isset($path_parts[2]) && $path_parts[2] === 'me') {
            $userController->getProfile();
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Route not found']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
