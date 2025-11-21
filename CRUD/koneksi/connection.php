<?php
$database_hostname = "localhost";
$database_username = "root";
$database_password = "";
$database_name = "uts_web";
$database_port = "3306";

try{
    $database_connection = new PDO ("mysql:host=$database_hostname;post=$database_port;dbname=$database_name", 
    $database_username, 
    $database_password
);
// echo "koneksi berhasil";
}catch (PDOException $e){
    echo $e->getMessage();
}
?>