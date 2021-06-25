<?php
$origin = $_SERVER["HTTP_ORIGIN"]; // check f.e. here for whitelist of origins
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}


define("ROOT", dirname(__FILE__));

require_once(ROOT . "/config.php");

define('URLROOT', Config::$urlroot);

require_once(ROOT . "/showErrors.php"); // DEL

require_once(ROOT . "/src/mvc/core.php");

$url = explode("/", $_SERVER["REQUEST_URI"]);
new Core($url);