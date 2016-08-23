<?php

$username = json_encode($_POST["username"]);
$password = json_encode($_POST["password"]);

if ($username != "hr@auphansoftware.com" || $password != "hello") {
	echo "Incorrect Username/Password";
} else {
	echo "Login Successful";

}
exit;
?>