import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setMessage("Login successful");
          // Note this name is a session variable (example for accessing session variable data)
          alert(`Hello ! ${data.name}`);
        } else {
          setMessage(data.message);
        }
      })
      .catch(err => {
        console.error(err);
        setMessage("Server error");
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>

      <p>{message}</p>
    </form>
  );
}

export default Login;

