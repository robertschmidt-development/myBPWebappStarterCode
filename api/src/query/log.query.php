<?php
require_once(ROOT . "/src/mvc/query.php");
require_once(ROOT . "/config.php");

class LogQuery extends Query
{
    private $table;

    public function __construct()
    {
        parent::__construct();
        $this->table = Config::$tableLog;
    }

    public function getAllFromBerater($serviceberater)
    {
        $tableLog = $this->table;

        $sql = "SELECT
        $tableLog.id,
        $tableLog.auftragsnummer,
        $tableLog.fin,
        $tableLog.kennzeichen,
        $tableLog.erstzulassung,
        $tableLog.status_id AS status,
        $tableLog.bildVid,
        $tableLog.aufgaben,
        $tableLog.notiz,
        $tableLog.created
        FROM $tableLog
        WHERE $tableLog.serviceberater = '$serviceberater'";

        return $this->db->query($sql);
    }

    public function updateBildVid($id, $checked)
    {
        if ($checked) {
            $checked = "1";
        } else {
            $checked = "0";
        }
        $sql = "UPDATE $this->table SET bildVid = $checked WHERE id=$id";
        return $this->db->query($sql);
    }

    public function updateStatus($id, $status)
    {
        $sql = "UPDATE $this->table SET status_id = $status WHERE id=$id";
        return $this->db->query($sql);
    }

    public function updateAufgaben($id, $aufgaben)
    {
        if (!$aufgaben or $aufgaben === "null") {
            $aufgaben = "[]";
        }
        $sql = "UPDATE $this->table SET aufgaben = '$aufgaben' WHERE id=$id";
        return $this->db->query($sql);
    }

    public function updateNotiz($id, $notiz)
    {
        $sql = "UPDATE $this->table SET notiz = '$notiz' WHERE id=$id";
        return $this->db->query($sql);
    }
}
