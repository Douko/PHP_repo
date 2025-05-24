<!DOCTYPE html>
<html>
    <head>
        <title>Radio Buttons</title>
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    </head>
    <body class="container">
        <form method="GET" action="process.php">
            <br>
            <label>
                <input type="radio" name="county" value="dublin" checked>
                Dublin
            </label>

            <br>
            <label>
                <input type="radio" name="county" value="cork">
                Cork
            </label>
            <input type="submit" class="btn btn-primary">
        </form>
    </body>
</html>