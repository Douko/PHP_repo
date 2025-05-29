<?php
for ($i = 8; $i > 0; $i--){
    $odd = ($i%2);
    if ($odd) {
        continue;
    }
    print "I am an even number: $i\n";
}
?>