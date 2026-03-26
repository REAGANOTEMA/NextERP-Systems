<?php
/**
 * Check Apache Document Root and Fix API Access
 */

echo "🔍 Checking Apache Configuration...\n";

// Check where Apache is actually serving from
echo "Current script location: " . __DIR__ . "\n";

// Create a test file to see what Apache can access
file_put_contents(__DIR__ . '/apache-test.php', '<?php 
echo "Apache Test Working!\n";
echo "Document Root: " . $_SERVER[\'DOCUMENT_ROOT\'] . "\n";
echo "Script Name: " . $_SERVER[\'SCRIPT_NAME\'] . "\n";
echo "Request URI: " . $_SERVER[\'REQUEST_URI\'] . "\n";
?>');

echo "✅ Created apache-test.php\n";
echo "🌐 Try accessing: http://localhost/apache-test.php\n";
echo "🌐 If that works, we know Apache is serving from this directory\n";

// Also create the API files in the correct location if needed
$api_dir = __DIR__ . '/api';
if (!is_dir($api_dir)) {
    mkdir($api_dir, 0777, true);
    echo "📁 Created API directory\n";
}

// Create a simple registration endpoint directly
$register_file = __DIR__ . '/api/register.php';
$register_content = '<?php
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
?>';

file_put_contents($register_file, $register_content);
echo "✅ Created simple register.php at: $register_file\n";
echo "🌐 Try accessing: http://localhost/api/register.php\n";

echo "\n🎯 Next Steps:\n";
echo "1. Test: http://localhost/apache-test.php\n";
echo "2. If that works, test registration with POST to: http://localhost/api/register.php\n";
echo "3. Update frontend to use the correct API endpoint\n";
?>
