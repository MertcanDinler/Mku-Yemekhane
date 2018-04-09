<?php
    $host = "localhost";
    $dbname = "mkuyemek";
    $user = "root";
    $password = "";
    try{
        $db = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8", $user, $password);
    }catch(PDOException $e){
        exit();
    }
?>