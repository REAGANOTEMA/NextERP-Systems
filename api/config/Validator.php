<?php
/**
 * Input Validation Class
 */

class Validator {
    public static function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function validateRequired($data, $fields) {
        $missing = [];
        foreach ($fields as $field) {
            if (!isset($data->$field) || empty($data->$field)) {
                $missing[] = $field;
            }
        }
        return $missing;
    }

    public static function validateString($value, $minLength = 1, $maxLength = 255) {
        if (!is_string($value)) {
            return false;
        }
        $length = strlen(trim($value));
        return $length >= $minLength && $length <= $maxLength;
    }

    public static function validateNumber($value, $min = null, $max = null) {
        if (!is_numeric($value)) {
            return false;
        }
        $num = (float)$value;
        if ($min !== null && $num < $min) {
            return false;
        }
        if ($max !== null && $num > $max) {
            return false;
        }
        return true;
    }

    public static function validateDate($date, $format = 'Y-m-d') {
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }

    public static function validateEnum($value, $allowedValues) {
        return in_array($value, $allowedValues);
    }

    public static function sanitizeString($input) {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }

    public static function sanitizeEmail($email) {
        return filter_var(trim($email), FILTER_SANITIZE_EMAIL);
    }

    public static function validatePassword($password) {
        if (strlen($password) < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (!preg_match('/[A-Z]/', $password)) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!preg_match('/[a-z]/', $password)) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!preg_match('/[0-9]/', $password)) {
            return 'Password must contain at least one number';
        }
        return true;
    }

    public static function validateStudentId($studentId) {
        return preg_match('/^[A-Z0-9]{3,10}$/', $studentId);
    }

    public static function validateFileUpload($file, $allowedTypes = [], $maxSize = 5242880) {
        $errors = [];
        
        if ($file['error'] !== UPLOAD_ERR_OK) {
            $errors[] = 'File upload error';
        }
        
        if ($file['size'] > $maxSize) {
            $errors[] = 'File size exceeds maximum allowed size';
        }
        
        if (!empty($allowedTypes) && !in_array($file['type'], $allowedTypes)) {
            $errors[] = 'File type not allowed';
        }
        
        return $errors;
    }
}
?>
