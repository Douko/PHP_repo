<?php
//---- (1) LOGIC ----
$id = filter_input(INPUT_GET, 'id');
$title = filter_input(INPUT_POST, 'title');
$price = filter_input(INPUT_POST, 'price');
?>

<!-- (2) HTML template output -->
 <!DOCTYPE html>
 <html>
    <head>
        <title>process</title>
    </head>
    <body>
        id = <?= $id ?>
        <br>title = <?= $title ?>
        <br>price = <?= $price ?>
    </body>
 </html>