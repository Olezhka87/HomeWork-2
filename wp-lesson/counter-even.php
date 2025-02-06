<?php
$number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function numbers($numbers) {
        for ($i = 0; $i < count($numbers); $i++) {
            if ($numbers[$i] % 2 == 0) {
                echo $numbers[$i];
            }
        }
    }
?>