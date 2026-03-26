<?php
require_once '../controllers/CourseController.php';

$courseController = new CourseController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'courses') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2])) {
            $courseController->getCourse($path_parts[2]);
        } else {
            $courseController->getAllCourses();
        }
        break;
    case 'POST':
        $courseController->createCourse();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $courseController->updateCourse($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Course ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $courseController->deleteCourse($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Course ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
