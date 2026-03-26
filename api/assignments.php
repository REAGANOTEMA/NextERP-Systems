<?php
require_once '../controllers/AssignmentController.php';

$assignmentController = new AssignmentController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'assignments') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2])) {
            $assignmentController->getAssignment($path_parts[2]);
        } else {
            $assignmentController->getAllAssignments();
        }
        break;
    case 'POST':
        $assignmentController->createAssignment();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $assignmentController->updateAssignment($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Assignment ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $assignmentController->deleteAssignment($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Assignment ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
