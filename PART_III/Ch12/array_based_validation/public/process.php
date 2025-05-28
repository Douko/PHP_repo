<?php
require 'zeroFunction.php';

$isSubmitted = ($_SERVER['REQUEST_METHOD'] === 'POST');
$productCode = '';
$errors = [];

if ($isSubmitted){
    $productCode = filter_input(INPUT_POST, 'productCode');
    $price = filter_input(INPUT_POST, 'price');

    if (empty($productCode)){
        $errors[] = 'missing product code';
    } elseif (strlen($productCode) < 3){
        $errors[] = 'product code too few characters';
    }

    if (isAnEmptyNonZeroString($price)){
        $errors[] = 'missing price';
    } elseif (!is_numeric($price)){
        $errors[]= 'price was not a number';
    }
}

$isValid = empty($errors);
if ($isSubmitted && $isValid){
    print 'input data was error free';
    die();
}