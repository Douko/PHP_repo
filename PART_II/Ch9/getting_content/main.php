<?php
$file = __DIR__.'/data.txt';

$text = file_get_contents($file);
$numBytes = filesize($file);
$newlinesChanged = str_replace("\n", 'N', $text);

print "numBytes = $numBytes\n";
print $newlinesChanged;
?>