<?php
$cars1 = ['audi' => 'silver', 'bmw' => 'black'];
$cars2 = ['audi' => 'white', 'ferrari' => 'red'];
$names1 = ['matt' => 'smith', 'joelle' => 'murphy'];
$names2 = ['joelle' => 'murphy', 'matt' => 'smith'];

print_r($cars1 + $cars2);
var_dump($names1 == $names2);
var_dump($names1 === $names2);
print_r(['rolls royce' => 'yellow', ...$cars1, ...$names1]);
?>