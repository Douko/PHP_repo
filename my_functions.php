<?php
function which_is_smaller(int $n1, int $n2): int
{
    if($n1 < $n2){
        return $n1;
    } else {
        return $n2;
    }
}
?>