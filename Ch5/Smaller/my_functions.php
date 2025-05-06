<?php
function which_is_smaller(int $n1, int $n2, bool $nullIfSame = false): ?int
{
    if ($n1 < $n2) {
        return $n1;
    }
    if ($n2<$n1) {
        return $n2;
    }
    if ($nullIfSame) {
        return NULL;
    }
    return $n1;
}
?>