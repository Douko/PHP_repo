<!DOCTYPE html>
<html>
    <head><title>Checkboxes</title></head>
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    </head>
    <body>
        <h1>Extra pizza toppings</h1>
        <form method="GET" action="process.php">
            <p><label><input type="checkbox" name="olives">Olives</label></p>
            <p><label><input type="checkbox" name="pepper">Pepper</label></p>
            <p><label><input type="checkbox" name="garlic">Garlic salt</label></p>
            <p><input type="submit" class="btn btn-primary"></p>
        </form>
    </body>
</html>