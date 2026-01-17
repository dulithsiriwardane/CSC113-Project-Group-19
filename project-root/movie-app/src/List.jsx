import { useEffect, useState } from "react";

    function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("http://localhost/api/fetchFromFav.php",{
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => setMessages(data.key_list));
    }, []);

    return (
        <div>
        {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
        ))}
        </div>
    );
    }
