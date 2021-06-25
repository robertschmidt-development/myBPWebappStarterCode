<?php
require_once(ROOT . "/src/mvc/basecontroller.php");
require_once(ROOT . "/src/mvc/query.php");
require_once(ROOT . "/src/query/fehler.query.php");


class FehlerController extends BaseController
{
    public function api()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                if (func_num_args() === 0) {
                    $this->getFehlerdata();
                } else {
                    // $this->getOneAlias(func_get_args()); // http://localhost:8080/phpmvcrestapi/api/log/api/id
                }
                break;
            case 'POST':
                $this->createNewFehler();
                break;
            case 'PUT':
                $this->updateFehler();
                break;
            case 'DELETE':
                $this->deleteFehler(func_get_args());
                break;
            default:
                return http_response_code(404);
                break;
        }
    }

    private function getFehlerdata()
    {
        try {
            $query = new Query();
            $result = $query->selectAll(Config::$tableFehler);
            $resultArr = $query->fetchAllAssoc($result);
            if (!$resultArr) {
                echo $this->json_response(400);
            }
            echo $this->json_response(200, $resultArr);
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    private function createNewFehler()
    {
        try {
            $post_json = file_get_contents('php://input');
            $obj = json_decode($post_json);
            $query = new FehlerQuery();
            $result = $query->insertNewFehler($obj);
            if (!$result) {
                echo $this->json_response(400);
            }
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    private function deleteFehler($id)
    {
        try {
            $query = new Query();
            $result = $query->deleteById(Config::$tableFehler, $id[0]);
            if (!$result) {
                echo $this->json_response(400);
            }
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    private function updateFehler()
    {
        try {
            $post_json = file_get_contents('php://input');
            $obj = json_decode($post_json);
            $query = new FehlerQuery();
            $result = $query->updateFehler($obj);
            if (!$result) {
                echo $this->json_response(400);
            }
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }
}