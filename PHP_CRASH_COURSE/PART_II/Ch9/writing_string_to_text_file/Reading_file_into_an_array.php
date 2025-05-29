<?php
$file = __DIR__ .'/data.txt';
$lines = file($file);

foreach ($lines as $key => $line){
    print "[$key]$line";
}
?>