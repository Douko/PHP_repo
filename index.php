
<?php
$lastname = $lastname_from_user ??  'Anonymous';
print "Hello Mr. $lastname\n";

$lastname_from_user = 'Smith';
$lastname = $lastname_from_user ?? 'Anonimous';
print "Hello Mr. $lastname\n";
?>