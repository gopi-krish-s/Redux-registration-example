import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./reducer/Redux/enterslice";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Signup");
  };

  const handling = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
    axios
      .get("http://localhost:5000/users", {
        params: { username, password },
      })
      .then((res) => {
        if (res.data.length) {
          localStorage.setItem("username", res.data[0].username); 
           navigate("/profile"); 
           alert("valid credentials.");
        } else {
          alert("Invalid credentials.");
        }
      })
      .catch((err) => alert("An error occurred."));
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handling}>
          Login
        </button>
        <button type="submit" onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
