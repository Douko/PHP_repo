<?php
$rainfallValues = [
    'jan' => 10,
    'feb' => 9,
    'march' => 12
];

unset($rainfallValues['feb']);

print "--  Monthly rainfall --\n";
foreach ($rainfallValues as $key => $rainfallValue):
    print "$key: $rainfallValue\n";
endforeach;

print "hello";
?>