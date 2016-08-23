<?php

$username = $_POST["username"];
$password = $_POST["password"];

if( empty($username) || empty($password) ) {
	header("Refresh:0; url= index.html");
} else

	if ($username == "hr@auphansoftware.com" && $password == "hello") {
		echo "Login Successful";
	} else {
		echo "Incorrect Username/Password";

	}

exit;
?>

