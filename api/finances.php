<?php
require_once '../controllers/FinanceController.php';

$financeController = new FinanceController();

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

if ($path_parts[0] !== 'api' || $path_parts[1] !== 'finances') {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Route not found']);
    exit();
}

switch ($method) {
    case 'GET':
        if (isset($path_parts[2]) && $path_parts[2] === 'my') {
            $financeController->getMyFinances();
        } elseif (isset($path_parts[2]) && $path_parts[2] === 'summary') {
            $financeController->getFinanceSummary();
        } elseif (isset($path_parts[2])) {
            $financeController->getFinance($path_parts[2]);
        } else {
            $financeController->getAllFinances();
        }
        break;
    case 'POST':
        $financeController->createFinance();
        break;
    case 'PUT':
        if (isset($path_parts[2])) {
            $financeController->updateFinance($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Finance ID is required']);
        }
        break;
    case 'DELETE':
        if (isset($path_parts[2])) {
            $financeController->deleteFinance($path_parts[2]);
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Finance ID is required']);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        break;
}
?>
