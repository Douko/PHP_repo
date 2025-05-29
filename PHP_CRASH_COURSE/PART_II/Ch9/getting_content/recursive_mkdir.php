<?php
$dir = __DIR__."/sub/subsub";
$file = $dir.'/data.txt';

if (!is_dir($dir)){
    mkdir($dir, recursive: true);
}
touch($file);

$text = file_get_contents($file);
print $text;
?>