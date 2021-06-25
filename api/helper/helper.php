<?php

class Helper
{
    public static function cleanDir($folder)
    {
        $files = glob($folder . "/*");
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
    }

    public static function validateInput($input)
    {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        return $input;
    }

    public static function validateDate($str, $month)
    {
        $validDate = new stdClass();

        if (!strtotime($str)) {
            $validDate->isvalid = false;
            $validDate->value = 'NULL';
            return $validDate;
        } else {
            $date = strtotime($str);
            $month = strtotime($month);
            if (date("Y-m", $date) === date("Y-m", $month)) {
                $validDate->isvalid = true;
            } else {
                $validDate->isvalid = false;
            }

            $date = date("Y-m-d H:i:s", $date);
            
            $validDate->value = "'$date'";
        }
        
        return $validDate;
    }
}
