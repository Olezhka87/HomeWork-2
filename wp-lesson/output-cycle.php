<?php
function htmlElement2($tag, $content, $count) {
    if (!empty($tag) && !empty($content) && is_numeric($count) && $count > 0) {
        for ($i = 0; $i < $count; $i++) {
            echo "<$tag>$content</$tag>"; 
            echo "<br>";
        }
    }
}
?>
