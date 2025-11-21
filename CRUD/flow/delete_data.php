<?php
require_once '../koneksi/connection.php';

$id = $_POST["id"];

try{
    $sql="DELETE FROM `data_perusahaan` WHERE `data_perusahaan`.`id` = ?";
    $connect = $database_connection->prepare($sql);
    $connect->execute([$id]);

    echo "delete behasil";
}catch (PDOException $e){
    die("gagal menghapus data" .$e->getMessage());
}
?>