<?php
require_once(ROOT . "/config.php");

class Core
{
    private $controllerName;
    private $controllerFile;
    private $controller;
    private $method;
    private $instance;
    private $params;

    public function __construct($url)
    {
        // http://localhost     /php-api    /controller  /method   /params
        //         $url[0]      /$url[1]     /$url[2]    /$url[3]   $url[...]
    
        $this->controllerName = $url[Config::$controllerIndex];

        $this->controllerFile = $this->controllerName . ".controller";
        $this->controller = ucfirst($this->controllerName) . "Controller";
        $this->createInstanceOfController();
        
        if (isset($url[Config::$methodIndex]) and $url[Config::$methodIndex] !== "") {
            $this->method = $url[Config::$methodIndex];
        }
        $this->callMethod($url);
    }

    private function createInstanceOfController()
    {
        if (!file_exists(ROOT . "/src/controllers/$this->controllerFile.php")) {
            die("controller does not exist. Controller: " . $this->controllerFile);
        }
        
        require_once(ROOT . "/src/controllers/$this->controllerFile.php");
        $this->instance = new $this->controller();
    }

    private function callMethod($url)
    {
        if (!method_exists($this->controller, $this->method)) {
            die("method does not exist in controller. Controller: " . $this->controller . ", Method: " . $this->method);
        }

        // delete other values in the url-array to get params
        array_splice($url, Config::$deleteIndexForParamsIndexStart, Config::$deleteIndexForParamsIndexEnd);
        $this->params = $url ? array_values($url) : [];
        call_user_func_array([$this->instance, $this->method], $this->params);
    }
}
