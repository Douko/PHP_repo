<?php
/*function which_is_smaller(int $n1, int $n2): int
{
    if($n1 < $n2){
        return $n1;
    } else {
        return $n2;
    }
}*/
function print_stars(int $numStars, string $spacer):void
{
    if (empty($spacer)){
        return;
    }
    $lineLength = 20;
    $starsString = str_repeat('*', $numStars);
    $centeredStars = str_pad($starsString, $lineLength, $spacer, STR_PAD_BOTH);
    print $centeredStars . "\n";
}
function print_tree(string $spacer): void
{
    print_stars(1, $spacer);
    print_stars(5, $spacer);
    print_stars(9, $spacer);
    print_stars(13,$spacer);
    print_stars(1, $spacer);
    print_stars(1, $spacer);
}
?>