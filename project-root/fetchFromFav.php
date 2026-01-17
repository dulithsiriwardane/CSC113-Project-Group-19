<?php 
    require_once 'db.php';

    session_start();

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    //$email = $_SESSION['email'];
    $email = "test@gmail.com";
    $query = "SELECT keys FROM fav_list WHERE email = '$email'";

    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) === 0) {
        echo json_encode([
            "status" => "success",
            "key_list" => []
        ]);
        exit;
    }


    $keys = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $keys[] = $row['keys'];
    }

    echo json_encode([
        "status" => "success",
        "key_list" => $keys
    ]);

    // React way to list fav
    
    //import { useEffect, useState } from "react";

    // function Messages() {
    // const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost/api/fetchFromFav.php")
    //     .then(res => res.json())
    //     .then(data => setMessages(data));
    // }, []);

    // return (
    //     <div>
    //     {messages.map((msg, index) => (
    //         <div key={index}>{msg}</div>
    //     ))}
    //     </div>
    // );
    // }

    // export default Messages;

?>