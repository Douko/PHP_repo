<?php
$items = [
    ['id' => 102, 'description' => 'Hammer', 'price' => 9.99],
    ['id' => 510, 'description' => 'Bucket of nails', 'price' => 19.99]
];
?>
<!Doctype html>
<html>
    <head><title>Cart Form Array</title>
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    </head>
    <body class="container">
        <h1>Your shopping cart</h1>
        <?php foreach ($items as $item): ?>
            <div class="col-lg-3 text-end py-2">
                <?= $item['description'] ?>$<?= $item['price'] ?>
                <a href="/show.php?id=<?= $item['id'] ?>" class="btn btn-primary">Details</a>
            </div>
        <?php endforeach; ?>
    </body>
</html>