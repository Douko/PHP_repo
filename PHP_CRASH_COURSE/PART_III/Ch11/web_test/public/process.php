<?php
$firstName = filter_input(INPUT_POST,  'firstName');
?>

<!-- (2) HTML template output -->
<!Doctype html>
<html>
    <head><title>process</title></head>
    <body>
        Hello <?= $firstName?>
    </body>
</html>