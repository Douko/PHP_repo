<?php
function sum(...$numbers): int
{
    $total = 0;

    foreach ($numbers  as $number){
        $total += $number;
    }
    return $total;
}
?>