<?php
require_once '../koneksi/connection.php';

$kategori = $_POST['ktgr'];
$judul = $_POST['jdl'];
$deskripsi = $_POST['dkpsi'];
$photo_name = $_FILES["filePhoto"]["name"];
$photo_tmp = $_FILES["filePhoto"]["tmp_name"];

if (!empty($_POST["id"])){
    //update data
    move_uploaded_file($photo_tmp, '../photo/' .$photo_name);

    $sql= "UPDATE `data_perusahaan` SET `kategori` = ?, `judul` = ?, `deskripsi` = ?, `photo` = ? WHERE `data_perusahaan`.`id` = ?;";

    $connect = $database_connection->prepare($sql);
    $connect->execute([
        $kategori,
        $judul,
        $deskripsi,
        'photo/' .$photo_name,
        $_POST["id"]
    ]);

    ECHO "update berhasil";
}else {
    //insert
    move_uploaded_file($photo_tmp, '../photo/' .$photo_name);

    $sql ="INSERT INTO `data_perusahaan` (`kategori`, `judul`, `deskripsi`, `photo`) VALUES (?, ?, ?, ?);";

    $connect = $database_connection->prepare($sql);
    $connect->execute([
        $kategori,
        $judul,
        $deskripsi,
        'photo/' .$photo_name,
    ]);
ECHO "insert berhasil";
}

?>