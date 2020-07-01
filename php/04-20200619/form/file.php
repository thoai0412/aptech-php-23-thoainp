<!-- <?php

echo "<hr>";
echo $_GET ["name"];
echo "<hr>";
echo $_GET ["email"]
?> -->

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aptech_php_23_04";
$name = $_POST['name123'];
$email = $_POST['email123'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO aptech_php_23_04.usersAccount (PASSWORD,email)
VALUES ('$name','$email')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>