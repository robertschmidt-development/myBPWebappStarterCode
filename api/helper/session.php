<?php

class Session
{
    public static function createSessionVariable($name, $value)
    {
        $_SESSION[$name] = $value;
    }

    public static function isLoggedIn()
    {
        if (!isset($_SESSION)) {
            return false;
        }
        return true;
    }

    public static function tellNotAllowed()
    {
        if (!self::isLoggedIn()) {
            http_response_code(401);
            exit;
        }
    }

    public static function deleteSession()
    {
        session_unset();
        session_destroy();
    }
}
