<?php
require_once(ROOT . "/helper/helper.php");

class BaseController
{
    protected function loadView($view, $data = [])
    {
        if (file_exists(ROOT . "/src/views/$view.view.php")) {
            require_once(ROOT . "/src/views/$view.view.php");
        } else {
            die("View: $view does not exist.");
        }
    }

    protected function redirect($url)
    {
        header("location: {$url}");
        exit;
    }

    protected function getFormInputs($keys)
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
            $data = array();
            foreach ($keys as $key) {
                $data[$key] = Helper::validateInput($_POST[$key]);
            }
            return $data;
        }
    }

    protected function json_response($code = 200, $data = null)
    {
        return json_encode(array(
            'status' => http_response_code($code),
            'data' => $data
            ));
    }
}
