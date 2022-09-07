<?php
    $name = htmlspecialchars($_POST["name"]);
    $comment = htmlspecialchars($_POST["comment"]);

    echo "hi $name, your comment has been received successfully!";
    echo "here is the comment: $comment";
?>