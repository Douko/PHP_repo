<?php
$rainfallValues = [
    0 => 10,
    4 => 8,
    3 => 12
];

print "-- Monthly rainfall --\n";
foreach ($rainfallValues as $key => $rainfallValue){
    print "$key: $rainfallValue\n";
}

var_dump(array_is_list($rainfallValues));
?>