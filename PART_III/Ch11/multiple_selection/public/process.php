<?php
$flowers = filter_input(INPUT_GET, 'flowers', options: FILTER_REQUIRE_ARRAY);

if(empty($flowers)){
    print 'no flowers selected';
} else {
    $toppingsString = implode(' + ', $flowers);
    print "flowers: $toppingsString";
}