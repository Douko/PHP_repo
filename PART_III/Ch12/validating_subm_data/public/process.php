<?php
$isSubmitted = ($_SERVER['REQUEST_METHOD'] === 'POST');
$isValid = true;
$firstName = '';

if ($isSubmitted){
    $firstName = filter_input(INPUT_POST, 'firstName');

    if (strlen($firstName) < 3){
        $isValid = false;
        $errorMessage = 'invalid - name must contain at least 3 letters';
        print $errorMessage;
    }
}
if ($isSubmitted && $isValid){
    print "Hello $firstName";
    die();
}