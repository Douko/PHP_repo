<?php
$file = __DIR__.'/data.txt';
$file2 = __DIR__.'/data2.txt';

$text = "file not found: $file";
$text2 = "file not found: $file2";

if (file_exists($file)){
    $text = file_get_contents($file);
}

if (file_exists($file2)){
    $text2 = file_get_contents($file2);
}

print $text ."\n";
print $text2 . "\n";
?>