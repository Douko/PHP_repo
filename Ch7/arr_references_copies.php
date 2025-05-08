<?php
$animals =['cat', 'dog', 'giraffe', 'elephant'];

$variable2 = $animals;
array_pop($variable2);
var_dump($animals);

$variable3 = &$animals;
print array_pop($variable3)."\n";
var_dump($animals);
?>