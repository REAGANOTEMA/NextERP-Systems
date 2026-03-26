<?php
require_once '../controllers/AttendanceController.php';

$attendanceController = new AttendanceController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'attendance') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2])) {
            $attendanceController->getAttendance($path_parts[2]);
        } else {
            $attendanceController->getAllAttendance();
        }
        break;
    case 'POST':
        $attendanceController->createAttendance();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $attendanceController->updateAttendance($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Attendance ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $attendanceController->deleteAttendance($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Attendance ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
