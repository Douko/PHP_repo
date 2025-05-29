<?php
$animals = ['cat', 'dog', 'giraffe', 'elephant'];

foreach ($animals as $animal){
    print "$animal, ";
}

print "\nforeach with keys and values";

foreach($animals as $key => $animal){
    print "animal";
    if ($key != array_key_last($animals)) {
        print ", ";
    }
    else {
        print "\n";
    }
}
print "hello";
?>