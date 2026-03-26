<?php
require_once '../controllers/SubmissionController.php';

$submissionController = new SubmissionController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'submissions') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2])) {
            $submissionController->getSubmission($path_parts[2]);
        } else {
            $submissionController->getAllSubmissions();
        }
        break;
    case 'POST':
        $submissionController->createSubmission();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $submissionController->updateSubmission($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Submission ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $submissionController->deleteSubmission($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Submission ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
