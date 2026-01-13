import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setMessage("Login successful");
          
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
        type="text"
        placeholder="Name"
        value={username}
        onChange={e => setUserName(e.target.value)}
        required
      />

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

      <input
        type="password"
        placeholder="Confirm-Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
      />

      

      <button type="submit">Login</button>

      <p>{message}</p>
    </form>
  );
}

export default Login;

