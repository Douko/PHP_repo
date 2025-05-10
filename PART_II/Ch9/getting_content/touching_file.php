<?php
$file = __DIR__.'/data.txt';
$file2 = __DIR__.'/data2.txt';

touch($file1);
touch($file2);

$text1 = file_get_contents($file);
$text2 = file_get_contents($file2);

print $text1 . "\n";
print $text2. "\n";
?>