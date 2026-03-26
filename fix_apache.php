<?php
/**
 * Fix Apache Configuration for API Access
 * This file should be placed in the correct Apache document root
 */

echo "🔧 Fixing Apache API Access...\n";
echo "Current working directory: " . __DIR__ . "\n";
echo "Document root should be: " . __DIR__ . "\n";

// Check if we can access the API files
$api_file = __DIR__ . '/api/test.php';
if (file_exists($api_file)) {
    echo "✅ API test file exists at: $api_file\n";
} else {
    echo "❌ API test file NOT found at: $api_file\n";
}

// Create a simple test in the root
file_put_contents(__DIR__ . '/api-test.php', '<?php echo json_encode(["success" => true, "message" => "API working from root!"]); ?>');
echo "✅ Created api-test.php in root directory\n";

echo "\n🌐 Try accessing: http://localhost/api-test.php\n";
echo "🌐 If that works, then the API files need to be in the Apache document root\n";
echo "📁 Current document root appears to be: " . __DIR__ . "\n";
echo "📁 API files are in: " . __DIR__ . "/api\n";
?>
