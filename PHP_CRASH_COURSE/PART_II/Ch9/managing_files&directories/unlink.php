<?php
$dir = __DIR__.'/var';
$file = $dir.'/data.txt';

if (!is_dir($dir)):
    mkdir($dir);
endif;

touch($file);

var_dump(is_dir($dir));
var_dump(file_exists($file));

unlink($file);
rmdir($dir);

var_dump(file_exists($file));
var_dump(is_dir($dir));
?>