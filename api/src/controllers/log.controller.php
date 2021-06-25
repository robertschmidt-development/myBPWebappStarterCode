<?php
require_once(ROOT . "/src/mvc/basecontroller.php");
require_once(ROOT . "/src/mvc/query.php");
require_once(ROOT . "/src/query/log.query.php");


class LogController extends BaseController
{
    public function api()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                if (func_num_args() === 0) {
                    $this->getLogdata(); // http://localhost:8080/phpmvcrestapi/server/api/log/api
                } else {
                    // $this->getOneAlias(func_get_args()); // http://localhost:8080/phpmvcrestapi/api/log/api/id
                }
                break;
            case 'POST':
                // private function for Post-Request
                // http://localhost:8080/phpmvcrestapi/server/alias
                break;
            case 'PUT':
                // private function for Update-Request
                // http://localhost:8080/phpmvcrestapi/server/alias/id
                break;
            case 'DELETE':
                // private function for Delete-Request
                // http://localhost:8080/phpmvcrestapi/server/alias/id
                break;
            default:
                return http_response_code(405);
                break;
        }
    }

    private function getLogdata()
    {
        $query = new LogQuery();
        $result = $query->getAllFromBerater("S_ZIMMER"); // TODO need session name
        $resultArr = $query->fetchAllAssoc($result);
        echo $this->json_response(200, $resultArr);
    }

    public function updatebildvid()
    {
        try {
            $post_json = file_get_contents('php://input');
            $assocArr = json_decode($post_json);
            $query = new LogQuery();
            $query->updateBildVid($assocArr->id, $assocArr->checked);
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    public function updatestatus()
    {
        try {
            $post_json = file_get_contents('php://input');
            $assocArr = json_decode($post_json);
            $query = new LogQuery();
            $query->updateStatus($assocArr->id, $assocArr->status);
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    public function updateaufgaben()
    {
        try {
            $post_json = file_get_contents('php://input');
            $assocArr = json_decode($post_json);
            $query = new LogQuery();
            $query->updateAufgaben($assocArr->id, json_encode($assocArr->aufgaben));
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }

    public function updatenotiz()
    {
        try {
            $post_json = file_get_contents('php://input');
            $assocArr = json_decode($post_json);
            $query = new LogQuery();
            $query->updateNotiz($assocArr->id, $assocArr->notiz);
        } catch (\Throwable $th) {
            echo $this->json_response(500);
        }
    }
}
