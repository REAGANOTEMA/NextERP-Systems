<?php
require_once '../controllers/MessageController.php';

$messageController = new MessageController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'messages') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2]) && $path_parts[2] === 'my') {
            $messageController->getMyMessages();
        } elseif (isset($path_parts[2])) {
            $messageController->getMessage($path_parts[2]);
        } else {
            $messageController->getAllMessages();
        }
        break;
    case 'POST':
        $messageController->createMessage();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $messageController->updateMessage($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Message ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $messageController->deleteMessage($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Message ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
