<?php session_start() ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Site | Web 1.0</title>
    <link rel="stylesheet" href="../app/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
        <?php
        require_once '../common/post.php';
        $idx = $_GET['id'];
        $posts = get_post($idx);
        ?>
        <h1>Bonjour</h1>
        <h1>Voici quelque escuse pour vous !!!</h1>
        <?php
        $title = $posts['title'];
        $body = $posts['body'];
        $img = $posts['image'];
        ?>
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <h2><?php echo($title) ?></h2>
                        <p><?php echo($body) ?></p>
                        <img src="<?php echo($img) ?>" class="m-auto">
                        <a type="button" class="btn btn-danger" href="./posts.php">Retour</a>
                    </div>
                </div>
            </div>
        ?>
    
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>