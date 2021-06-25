<?php
require_once(ROOT . "/src/mvc/query.php");
require_once(ROOT . "/config.php");

class FehlerQuery extends Query
{
    private $table;

    public function __construct()
    {
        parent::__construct();
        $this->table = Config::$tableFehler;
    }

    public function insertNewFehler($fehler)
    {
        $sql = "INSERT INTO $this->table 
            (id, todo, baureihen, baujahre, bemerkung)
            VALUES 
            ('$fehler->id', '$fehler->todo', '$fehler->baureihen', '$fehler->baujahre', '$fehler->bemerkung')";

        return $this->db->query($sql);
    }

    public function updateFehler($fehler)
    {
        $sql = "UPDATE $this->table 
                SET todo = '$fehler->todo', baureihen = '$fehler->baureihen', baujahre = '$fehler->baujahre', bemerkung = '$fehler->bemerkung'
                WHERE id = '$fehler->id'";
        return $this->db->query($sql);
    }
}
