import React, { useState } from "react";
import "./Login.css";

function Login({ setButtonDisabled }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(event) {
    event.preventDefault();

    // Verify that MongoDB has a user with this username and password
    const authentication = async () => {
      const res = await fetch("http://localhost:3000/api/tasks");
      const data = await res.json();
      if (username === data[0].username && password === data[0].password) {
        console.log("Login successful");
        setIsLoggedIn(true);
        setButtonDisabled(false);
        // document.getElementById("addTaskButton").removeAttribute("disabled");
        document.getElementById("username").innerHTML = "admin";
        document.getElementById("pp").src =
          "https://media.licdn.com/dms/image/D4E03AQF_GOsw6tfzIg/profile-displayphoto-shrink_800_800/0/1677904003387?e=2147483647&v=beta&t=gjczxpbtRCgadgdjP88Rrn5KHKTpQvFYqxd-IHOiBm4";
      } else {
        console.log("Login failed");
      }
    };
    authentication();
  }

  return (
    <div>
      <div className="login-container">
        {/* <h2>Log In</h2> */}
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
        {isLoggedIn && <h2>Logged In</h2>}
      </div>
      <div className="register-account">
        <form>
          <label>
            Username:
            <input
              type="text"
              // value={newUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              // value={newEmail}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              // value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
