<?php
require_once(ROOT . "/src/mvc/query.php");
require_once(ROOT . "/config.php");

class MultipleQuery extends Query
{
    // public function getBriefeCombinedData($kundennummer)
    // {
    //     $tableDaten = Config::$tableDaten;
    //     $tableAlias = Config::$tableAlias;

    //     $sql = "SELECT
    //         $tableDaten.id,
    //         $tableDaten.kennzeichen,
    //         $tableAlias.alias AS fahrzeugtyp,
    //         $tableDaten.hu,
    //         $tableDaten.sp,
    //         $tableDaten.fsp
    //         FROM $tableDaten
    //         LEFT JOIN $tableAlias ON $tableDaten.fahrzeugtyp = $tableAlias.name
    //         WHERE $tableDaten.kundennummer = '$kundennummer'
    //         ";

    //     $result = $this->db->query($sql);

    //     return $result;
    // }

    // public function getDistinctKundenFromDaten()
    // {
    //     $tableDaten = Config::$tableDaten;
    //     $tableKunden = Config::$tableKunden;

    //     $sql = "SELECT DISTINCT
    //     $tableDaten.kundennummer,
    //     $tableKunden.firma AS firma,
    //     $tableKunden.anrede AS anrede,
    //     $tableKunden.strasse AS strasse,
    //     $tableKunden.plz AS plz,
    //     $tableKunden.ort AS ort
    //     FROM $tableDaten
    //     LEFT JOIN $tableKunden ON $tableDaten.kundennummer = $tableKunden.kundennummer
    //     WHERE $tableKunden.versenden = '1'";
        
    //     return $this->db->query($sql);
    // }
}