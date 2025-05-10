<?php
$dir = __DIR__."/var";
$file = $dir.'/data.txt';

if (!is_dir($dir)){
    mkdir($dir);
}
touch($file);

$text = file_get_contents($file);
print $text;
?>