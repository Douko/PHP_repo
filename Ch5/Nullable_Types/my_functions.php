<?php
function string_to_number(string $numberString): ?int
{
    return match($numberString){
        'half' => 0.5,
        'one' => 1,
        'two' => 2,
        'three' => 3,
        'four' => 4,
        'five' => 5,
        default => NULL
    };
}
function number_to_message(string $text, int|float|NULL $number): string
{
    if (is_int($number)){
        return "'$text' as an integer = $number\n";
    }
    if (is_float($number)) {
        return "'$text' as a float = $number\n";
    }

    return "sorry, could not conver '$text' to a number\n";
}
?>