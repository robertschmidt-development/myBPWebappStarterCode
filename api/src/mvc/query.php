<?php
require_once(ROOT . "/src/mvc/database.php");

class Query
{
    public $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function selectAll($table)
    {
        $sql = "SELECT * FROM $table";
        $result = $this->db->query($sql);
        return $result;
    }

    public function selectAllByColumnName($table, $name, $value)
    {
        $sql = "SELECT * FROM $table WHERE $name = '$value'";
        $result = $this->db->query($sql);
        return $result;
    }

    public function selectOneByColumnName($table, $name, $value)
    {
        $sql = "SELECT * FROM $table WHERE $name = '$value' LIMIT 1";
        $result = $this->db->query($sql);
        return $result;
    }

    public function selectOne($table)
    {
        $sql = "SELECT * FROM $table LIMIT 1";
        $result = $this->db->query($sql);
        return $result;
    }

    public function deleteById($table, $id)
    {
        $sql = "DELETE FROM $table WHERE id = '$id'";
        $result = $this->db->query($sql);
        return $result;
    }

    public function deleteAll($table)
    {
        $sql = "DELETE FROM $table";
        $result = $this->db->query($sql);
        return $result;
    }

    public function fetchAllAssoc($result)
    {
        if ($this->checkForResult($result)) {
            return $result->fetch_all(MYSQLI_ASSOC);
        }
        return [];
    }

    private function checkForResult($result)
    {
        if ($result->num_rows > 0) {
            return true;
        }
        return false;
    }
}