<?php
require_once '../controllers/DocumentController.php';

$documentController = new DocumentController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'documents') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2])) {
            $documentController->getDocument($path_parts[2]);
        } else {
            $documentController->getAllDocuments();
        }
        break;
    case 'POST':
        if (isset($path_parts[2]) && $path_parts[2] === 'upload') {
            $documentController->uploadFile();
        } else {
            $documentController->createDocument();
        }
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $documentController->updateDocument($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Document ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $documentController->deleteDocument($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Document ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
