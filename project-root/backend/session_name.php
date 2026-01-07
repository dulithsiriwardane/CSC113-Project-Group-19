<?php
    session_start();
    $name = $_SESSION['name'];
    echo json_encode([
        'status' => 'success',
        'message' => $name
    ]);
    exit;

?>