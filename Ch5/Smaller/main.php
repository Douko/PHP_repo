<?php
require_once __DIR__.'/my_functions.php';

$result1 = which_is_smaller(1, 1);
var_dump($result1);
$result2 = which_is_smaller(1, 1, true);
var_dump($result2);
$result3 = which_is_smaller(nullIfSame: true, n1: 1, n2: 1);
var_dump($result3);
$result4 = which_is_smaller(5,  nullIfSame: true, n2:5);
var_dump($result4);
$result5 = which_is_smaller(nullIfSame: true, n1:5, n2: 5);
var_dump($result5);
?>