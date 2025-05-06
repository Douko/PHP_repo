<?php
function greet(
    string $name,
    string $greeting = 'Good morning',
    bool $hasPhD = false
): void
{
    if ($hasPhD) {
        print "$greeting, Dr. $name\n";
    } else {
        print "$greeting, $name\n";
    }
}
?>