<?php
/**
 * Clear All Tables with Foreign Key Handling
 * Conerstone Software Company - Ultimate Professional Database Setup
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🔧 Clearing All Existing Tables...\n";
    
    $database = new Database();
    $conn = $database->getConnection();
    
    // Disable foreign key checks
    $conn->exec("SET FOREIGN_KEY_CHECKS = 0");
    
    // Get all table names and drop them
    $tables = $conn->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    
    foreach ($tables as $table) {
        $conn->exec("DROP TABLE IF EXISTS `$table`");
        echo "🗑️ Dropped table: $table\n";
    }
    
    // Re-enable foreign key checks
    $conn->exec("SET FOREIGN_KEY_CHECKS = 1");
    
    echo "\n✅ All tables cleared successfully!\n";
    echo "🚀 Ready to create Perfect Professional Database...\n";
    
} catch (Exception $e) {
    echo "❌ Error clearing tables: " . $e->getMessage() . "\n";
}
?>
