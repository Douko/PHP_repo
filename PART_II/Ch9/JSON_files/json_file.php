<?php
$filePath = __DIR__.'/data.json';

$data = [
    'name' => 'matt',
    'office' => 'E-042',
    'phone' => '086-111-2323'
];

$jsonString = json_encode($data);

file_put_contents($filePath, $jsonString);

$jsonStringFromFile = file_get_contents($filePath);
print $jsonStringFromFile;

$jsonArrayFromFile = json_decode($jsonStringFromFile, true);

print "\n";
var_dump($jsonArrayFromFile);
?>