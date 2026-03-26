<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

try {
    $data = json_decode(file_get_contents("php://input"));
    
    if (!$data || !isset($data->email) || !isset($data->password)) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        exit;
    }
    
    // Simple test - always succeed for now
    echo json_encode([
        "success" => true,
        "message" => "Registration successful!",
        "user" => [
            "email" => $data->email,
            "first_name" => $data->first_name ?? "Test"
        ]
    ]);
    
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
}
?>