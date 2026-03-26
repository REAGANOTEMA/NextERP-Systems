<?php
/**
 * JWT Authentication Class
 */

class JWT {
    private $secret_key = 'your-super-secret-jwt-key-change-this-in-production';
    
    public function encode($payload) {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode($payload);
        
        $header_encoded = $this->base64url_encode($header);
        $payload_encoded = $this->base64url_encode($payload);
        
        $signature = hash_hmac('sha256', "$header_encoded.$payload_encoded", $this->secret_key, true);
        $signature_encoded = $this->base64url_encode($signature);
        
        return "$header_encoded.$payload_encoded.$signature_encoded";
    }
    
    public function decode($jwt) {
        $parts = explode('.', $jwt);
        if (count($parts) != 3) {
            return false;
        }
        
        $header = base64_decode($parts[0]);
        $payload = base64_decode($parts[1]);
        $signature = $parts[2];
        
        return json_decode($payload, true);
    }
    
    public function verify($jwt) {
        $parts = explode('.', $jwt);
        if (count($parts) != 3) {
            return false;
        }
        
        $header_encoded = $parts[0];
        $payload_encoded = $parts[1];
        $signature = $parts[2];
        
        $expected_signature = hash_hmac('sha256', "$header_encoded.$payload_encoded", $this->secret_key, true);
        $expected_signature_encoded = $this->base64url_encode($expected_signature);
        
        return hash_equals($signature, $expected_signature_encoded);
    }
    
    private function base64url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
    
    private function base64url_decode($data) {
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
    }
}
?>
