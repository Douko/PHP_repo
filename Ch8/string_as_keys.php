<?php
$rainfallValues = [
    'jan' => 10,
    'feb' => 8,
    'march' => 12
];

print "-- Monthly rainfall --\n";
foreach ($rainfallValues as $key => $rainfallValue){
    print "$key: $rainfallValue\n";
}

var_dump(array_is_list($rainfallValues));
print $rainfallValues['march'];
?>