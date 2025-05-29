<?php
$numbers = [10, 20, 30];

$doubleNumbers = array_map(
    fn (int $n): int => $n * 2,
    $numbers
);

var_dump($doubleNumbers);
?>