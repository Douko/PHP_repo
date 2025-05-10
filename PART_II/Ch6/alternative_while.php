<?php
$password = "cat";

while (strlen($password) < 6):
    $password = readline("enter new password (at least 6 characters): ");
endwhile;

print "password now set to '$password'";
?>