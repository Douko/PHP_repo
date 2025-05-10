<?php
$studentGrades = [
    2025001 => 'A',
    'B',
    'A',
    'D',
    'F'
];

print "-- Student grades --\n";
foreach ($studentGrades as $studentId => $grade){
    print "$studentId => $grade\n";
}

var_dump(array_is_list($studentGrades));
?>