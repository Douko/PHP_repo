<?php
$toppings
    = filter_input(INPUT_GET, 'toppings', options: FILTER_REQUIRE_ARRAY);

if(empty($toppings)) {
    print 'no extra toppings selected';
} else {
    $toppingsString = implode('+', $toppings);
    print "toppings: $toppingsString";
}