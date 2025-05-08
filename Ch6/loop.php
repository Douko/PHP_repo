<?php
$password = "cat";

while (strlen($password) < 6) {
    $password = readLine("Enter new password (at least 6 characters):");
}

print "password now set to '$password'";
?>