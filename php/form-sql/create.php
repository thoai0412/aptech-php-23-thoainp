<?php
$servername="localhost";
$username="root";
$password = "";
$dbname="myDatabase";
$conn = new mysqli($servername, $username , $password);
if ($conn -> connect_error){
    die("Connection failed : " . $conn->connect_error);
}
// $sql = "CREATE DATABASE myDatabase";



// $sql = "CREATE TABLE  (
//     id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     Account VARCHAR(20) NOT NULL ,
//     Password VARCHAR(20) NOT NULL,
//     Email VARCHAR(50) NOT NULL ,
//     reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )
// ";

$account = $_POST["account1"];
$password = $_POST["password2"];
$email = $_POST["email3"];

$sql = "INSERT INTO myDatabase.users(Account, Password, Email)
VALUES ( '$account', '$password' , '$email' )

";


if ($conn->query($sql) == TRUE){
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
$conn->close();
?>