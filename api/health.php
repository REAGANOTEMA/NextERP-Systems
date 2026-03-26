<?php
require_once 'config/headers.php';

echo json_encode([
    'status' => 'OK',
    'timestamp' => date('c'),
    'message' => 'Conerstone Software Company API is running'
]);
?>
