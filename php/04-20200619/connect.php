<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aptech_php_23_04";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";



// $sql ="CREATE TABLE  aptech_php_23_04.usersAccount(
//     id int(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     PASSWORD VARCHAR(20) NOT NULL,
//     email VARCHAR(50) NOT NULL 
// )";


$sql ="INSERT INTO aptech_php_23_04.usersAccount(id,PASSWORD,email)
VALUES ('1234','pas1234','girlngon@gmail.com');
";
if (mysqli_query($conn,$sql)){
    echo "Database created successfully";
} else 
{
  echo "Error creating database: " . $conn->error;
}


$conn->close();
?>

