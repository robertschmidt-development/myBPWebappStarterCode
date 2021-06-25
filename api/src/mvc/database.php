<?php
require_once(ROOT . "/config.php");

class Database
{
    private $conn;

    public function __construct()
    {
        try {
            $this->conn = new mysqli(Config::$host, Config::$username, Config::$password, Config::$dbname);
        } catch (Exception $e) {
            die("Verbindung zur Datenbank fehlgeschlagen. Database-Error: " . $this->conn->connect_error . "\n" . $e);
        }
        $this->conn->query("SET CHARACTER SET 'utf8'"); // BUG Kann nicht nach Ü suchen
        $this->conn->query("SET NAMES 'utf8'");
    }

    public function query($sql)
    {
        try {
            $result = $this->conn->query($sql);
            return $result;
        } catch (Exception $e) {
            echo("Database-Error: " . $this->conn->error . "\n" . $e);
        }
    }

    public function getLastInsertedId()
    {
        return $this->conn->insert_id;
    }

    public function __destruct()
    {
        $this->conn->close();
    }
}
