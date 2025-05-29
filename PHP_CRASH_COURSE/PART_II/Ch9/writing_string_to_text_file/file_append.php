<?php
$newcontent = <<<CONTENT
    the cat
    sat
    on the mat!
    CONTENT;

$file = __DIR__.'/newfile.txt';

file_put_contents($file, $newcontent, FILE_APPEND);
$text = file_get_contents($file);
print $text;
?>