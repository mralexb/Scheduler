<?php

//takes the q parameter
$q = $_REQUEST["q"];

//stores output
$output = "";

//databse info
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if ($q == "tutor") {
    $sql = "SELECT teacher FROM teacher";
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc())) { //error with this row.
        echo '<option value="' .$row["teacher"]. '">' .$row["teacher"].'</option>';
    }
}
