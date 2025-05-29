<?php
$dateString = date('F d, Y', time());
?>
<!Doctype html>
    <head><title> home</title></head>
    <body>
        <p>Welcome to My Great Website<br>
        Today is <?= $dateString ?>
        </p>
    </body>
</html>