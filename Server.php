<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "login_sample_db";//the name of the database
$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if(!$con)
{

	die("failed to connect!");
} 
$query = "SELECT * FROM users";

    $result = mysqli_query($con, $query);

    $score = mysqli_fetch_array($result)[0];
    if(array_key_exists("jsscore", $_POST)){
        if($_POST["jsscore"] > $score){

            $query = "UPDATE users SET score = ".mysqli_real_escape_string($con, $_POST['jsscore']);

            mysqli_query($con, $query);

            $score = $_POST["jsscore"]; //score var is updated

            echo "<h2 id = 'dbvalue'>".$score."</h2>";//this is echoed with the new score value

        }

    }
  