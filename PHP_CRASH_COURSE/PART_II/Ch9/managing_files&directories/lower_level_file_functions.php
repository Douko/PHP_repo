<?php
$file = __DIR__.'/data.txt';

$fileHandle = fopen($file, 'r');
$filesizeBytes = filesize($file);
$text = fread($fileHandle, $filesizeBytes);
fclose($fileHandle);
print $text;
?>