<?php
$name = 'Smith';

$characters = str_split($name);

foreach ($characters as $key => $character){
    print "character with key $key = '$character'\n";
}
?>