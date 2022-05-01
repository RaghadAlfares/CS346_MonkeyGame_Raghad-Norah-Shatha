<?php 
session_start();

	include("Server.php");
	include("functions.php");

	$user_data = check_login($con);

?>
<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>T-Rex Runner</title>
  </head>
  <body>
    <!-- <form action="signup.php" method="POST">
      <input type="text" name = "uid" placeholder="Username">
      <br>
      <input type="email" name = "email" placeholder="abcd@gmail.com">
      <br>
      <input type="password" name = "pwd" placeholder="Password">
      <br>
      <button type="submit" name="submit">Sign up</button>
    </form> -->
    <a href="logout.php">Logout</a>
      <div class="intro">Press space for start</div>

        <img src="trex.png" alt="T-Rex" class="trex" />
        <img src="cactus.png" alt="cactus" class="obstacle" />
        <!-- <img src="background.jpg" alt="Track" class="track" />  -->
        <div ><h2>Score:<span class="score"></span></h2>
        <h2 id="highest">Highest Score:<span class="Hscore"></span></h2>
        <h3 id="score"></h3>
        </div>
    <script src="script.js"></script> 
   
   <?php 
   $test_var = '<h3 id="score"></h3>';
   print_r($test_var);
    
   $sql = "SELECT score FROM users";
   $result = $con->query($sql);
   
   if ($result->num_rows > 0) {
   // output data of each row
   while($row = $result->fetch_assoc()) {
     echo "score: " . $row["score"]. "<br>";
   }  
   }
   
   
   ?>

     
  </body>
</html>