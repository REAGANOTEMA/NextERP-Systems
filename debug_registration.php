<?php
/**
 * Test Registration API Endpoint
 * Debug script to check if registration is working
 */

echo "🧪 Testing Registration API...\n";
echo "===============================\n\n";

// Test 1: Check if the file exists
echo "1. Checking if register-simple.php exists:\n";
$file_path = __DIR__ . '/api/auth/register-simple.php';
if (file_exists($file_path)) {
    echo "✅ File exists: $file_path\n";
} else {
    echo "❌ File NOT found: $file_path\n";
}

// Test 2: Check database connection
echo "\n2. Testing database connection:\n";
try {
    require_once __DIR__ . '/api/config/Database.php';
    $database = new Database();
    $conn = $database->getConnection();
    echo "✅ Database connection successful\n";
    
    // Check users table
    $result = $conn->query("SELECT COUNT(*) as count FROM users");
    $count = $result->fetch()['count'];
    echo "📊 Users in database: $count\n";
    
    // Show recent users
    $recent = $conn->query("SELECT email, role, created_at FROM users ORDER BY created_at DESC LIMIT 5")->fetchAll();
    echo "📋 Recent users:\n";
    foreach ($recent as $user) {
        echo "  - {$user['email']} ({$user['role']}) - {$user['created_at']}\n";
    }
    
} catch (Exception $e) {
    echo "❌ Database connection failed: " . $e->getMessage() . "\n";
}

// Test 3: Simulate a registration request
echo "\n3. Simulating registration request:\n";
try {
    $test_data = [
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'test' . time() . '@example.com',
        'password' => 'test123',
        'role' => 'student',
        'phone' => null,
        'bio' => null,
        'location' => null
    ];
    
    echo "📝 Test data: " . json_encode($test_data) . "\n";
    
    // Simulate the registration process
    $database = new Database();
    $conn = $database->getConnection();
    
    // Check if user exists
    $check_query = "SELECT id FROM users WHERE email = ?";
    $check_stmt = $conn->prepare($check_query);
    $check_stmt->execute([$test_data['email']]);
    
    if ($check_stmt->rowCount() > 0) {
        echo "⚠️ Test user already exists\n";
    } else {
        // Insert user
        $hashed_password = password_hash($test_data['password'], PASSWORD_DEFAULT);
        
        $query = "INSERT INTO users (first_name, last_name, email, password, role, phone, bio, location, is_approved) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)";
        
        $stmt = $conn->prepare($query);
        $success = $stmt->execute([
            $test_data['first_name'],
            $test_data['last_name'],
            $test_data['email'],
            $hashed_password,
            $test_data['role'],
            $test_data['phone'],
            $test_data['bio'],
            $test_data['location']
        ]);
        
        if ($success) {
            echo "✅ Test registration successful!\n";
            echo "📧 Test email: {$test_data['email']}\n";
            echo "🔑 Test password: {$test_data['password']}\n";
        } else {
            echo "❌ Test registration failed\n";
            echo "🔍 Error info: " . print_r($stmt->errorInfo(), true) . "\n";
        }
    }
    
} catch (Exception $e) {
    echo "❌ Registration test failed: " . $e->getMessage() . "\n";
}

// Test 4: Check web server configuration
echo "\n4. Checking web server setup:\n";
echo "📁 Current directory: " . __DIR__ . "\n";
echo "🌐 Document root should point to: " . __DIR__ . "/frontend\n";
echo "🔗 API should be accessible at: /api/auth/register-simple.php\n";

echo "\n🎯 Debugging Complete!\n";
echo "===============================\n";
echo "If everything above shows ✅, then:\n";
echo "1. Check browser network tab for API calls\n";
echo "2. Check console for JavaScript errors\n";
echo "3. Try accessing: http://localhost:5173/api/auth/register-simple.php\n";
echo "4. Make sure frontend dev server is running\n";
?>
