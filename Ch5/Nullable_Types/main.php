<?php
require_once __DIR__ . '/my_functions.php';

$text1 = 'three';
$number1 = string_to_number($text1);
print number_to_message($text1, $number1);

?>