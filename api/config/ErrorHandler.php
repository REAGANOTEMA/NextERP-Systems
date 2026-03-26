<?php
/**
 * Error Handler and Logger
 */

class ErrorHandler {
    private static $logFile = '../logs/error.log';

    public static function handleException($exception) {
        self::logError($exception->getMessage(), $exception->getFile(), $exception->getLine());
        self::sendErrorResponse('Internal Server Error', 500);
    }

    public static function handleError($errno, $errstr, $errfile, $errline) {
        self::logError($errstr, $errfile, $errline);
        self::sendErrorResponse('Internal Server Error', 500);
    }

    public static function logError($message, $file = '', $line = 0) {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[$timestamp] ERROR: $message";
        if ($file) {
            $logMessage .= " in $file";
        }
        if ($line) {
            $logMessage .= " on line $line";
        }
        $logMessage .= PHP_EOL;

        $logDir = dirname(self::$logFile);
        if (!file_exists($logDir)) {
            mkdir($logDir, 0777, true);
        }

        file_put_contents(self::$logFile, $logMessage, FILE_APPEND | LOCK_EX);
    }

    public static function logInfo($message) {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[$timestamp] INFO: $message" . PHP_EOL;

        $logDir = dirname(self::$logFile);
        if (!file_exists($logDir)) {
            mkdir($logDir, 0777, true);
        }

        file_put_contents(self::$logFile, $logMessage, FILE_APPEND | LOCK_EX);
    }

    public static function sendErrorResponse($message, $statusCode = 400, $data = null) {
        http_response_code($statusCode);
        $response = [
            'success' => false,
            'message' => $message
        ];
        if ($data !== null) {
            $response['data'] = $data;
        }
        echo json_encode($response);
        exit();
    }

    public static function sendSuccessResponse($message, $data = null, $statusCode = 200) {
        http_response_code($statusCode);
        $response = [
            'success' => true,
            'message' => $message
        ];
        if ($data !== null) {
            $response['data'] = $data;
        }
        echo json_encode($response);
        exit();
    }

    public static function validateAndSendError($data, $requiredFields) {
        $missing = Validator::validateRequired($data, $requiredFields);
        if (!empty($missing)) {
            self::sendErrorResponse('Missing required fields: ' . implode(', ', $missing), 400);
        }
    }

    public static function validateEmailAndSendError($email) {
        if (!Validator::validateEmail($email)) {
            self::sendErrorResponse('Invalid email format', 400);
        }
    }

    public static function validatePasswordAndSendError($password) {
        $passwordValidation = Validator::validatePassword($password);
        if ($passwordValidation !== true) {
            self::sendErrorResponse($passwordValidation, 400);
        }
    }
}

// Set custom error handlers
set_exception_handler(['ErrorHandler', 'handleException']);
set_error_handler(['ErrorHandler', 'handleError']);
?>
