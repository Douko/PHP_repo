<?php
$animals = ['cat', 'dog', 'giraffe', 'elephant'];

$numElements = count($animals);
for  ($i = 0; $i < $numElements; $i++){
    $animal = $animals[$i];
    print "$animal, ";
}
?>