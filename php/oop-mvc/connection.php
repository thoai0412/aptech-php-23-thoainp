<?php
class DB
{
    private static $instance =NULL;
    public static function getInstance(){
        if (!insset(self::$instance)){
            try {
                self::$instance = new PDO('mysql:host=localhost;dbname=demo_mvc', 'root','');
                self::$instance->exec("SET NAMES 'utf8'");
            } catch (PDOException $ex) {
                die($ex->getMessage());
            }
        }
        return self::$instance;
    }
}