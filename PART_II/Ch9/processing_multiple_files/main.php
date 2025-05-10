<?php
$dir = __DIR__.'/data';
$fileNamePattern = '/*.txt';
$files = glob($dir.$fileNamePattern);

$outputFile = __DIR__.'/total.txt';
touch($outputFile);
unlink($outputFile);

$total = 0;
foreach ($files as $file):
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $firstName = $lines[0];
    $lastName = $lines[1];
    $scoreString = $lines[2];
    $score = intval($scoreString);

    $outputFileHandle = fopen($outputFile, 'a');
    fwrite($outputFileHandle, "Player = $firstName $lastName / Score = $score\n");

    fclose($outputFileHandle);

    $total += $score;

ENDFOREACH;

$outputFileHandle = fopen($outputFile, 'a');
fwrite($outputFileHandle, "total of all scores = $total");
fclose($outputFileHandle);

print file_get_contents($outputFile);
?>