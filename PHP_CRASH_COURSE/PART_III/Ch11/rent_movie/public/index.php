<!DOCTYPE html>
<html>
    <head>
        <title>
            Movie Rent Form 1
        </title>
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    </head>
    <body>
        <h1>Rent Movie</h1>
        <form method="POST" action="process.php?movieId=80441">
            <p>
                <label for="number">
                    Credit card number:
                </label>
                <input name="number" id="number">
            </p>
            <p>
                <label for="date">
                    Expired date: 
                </label>
                <input name="date" id="date">
            </p>
            <p>
                <label for="cvv">
                    CCV code:
                </label>
                <input name="ccv" id="ccv">
            </p>
            <p>
                <input type="submit" name="watchNow"
                    value="Pay and start watching now" class="btn btn-sucess">
                <input type="submit" name="watchLater"
                    value="Pay and watch later" class="btn btn-sucess">
            </p>
        </form>
    </body>
</html>