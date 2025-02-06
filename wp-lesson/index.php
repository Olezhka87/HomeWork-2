<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Домашняя работа</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php
    include 'output.php';
    include 'output-cycle.php';
    include 'counter-even.php';
    ?>

<h2 class="text">Урок № 1</h2>

    <div class="block">
    <?php
    htmlElement('h2', '1. Java Script - как тебя выучить ?.');  
    htmlElement('h1', '2. php - ты решил добить меня?');
    htmlElement('h3', '3. CSS one love :).....Loading....');     
    ?>
    </div>

<h2 class="text">Урок № 2</h2>

    <div class="block">
    <?php
    htmlElement2('h2', '1. Java Script - как тебя выучить ?.', 3);  
    htmlElement2('h1', '2. php - ты решил добить меня?', 3);
    htmlElement2('h3', '3. CSS one love :).....Loading....', 1);     
    ?>
    </div>

<h2 class="text">Урок № 3</h2>

    <div class="block-number">
    <?php
    numbers($number);
    ?>
    </div>

</body>
</html>
