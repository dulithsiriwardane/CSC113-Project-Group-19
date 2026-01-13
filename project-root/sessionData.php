<?php 
    session_start();
    
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");


    echo json_encode([
        "status" => "success",
        "name"  =>  $_SESSION['name']
    ]);
    
?>