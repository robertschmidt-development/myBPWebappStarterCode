<?php
require_once(ROOT . "/src/mvc/basecontroller.php");
require_once(ROOT . "/src/mvc/query.php");


class BeraterController extends BaseController
{
    public function api()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                if (func_num_args() === 0) {
                    $this->getBeraterdata();
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

    private function getBeraterdata()
    {
        $query = new Query();
        $result = $query->selectAll(Config::$tableBerater);
        $resultArr = $query->fetchAllAssoc($result);
        echo $this->json_response(200, $resultArr);
    }
}
