import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[email, setemail]=useState("");
  const user= {name,password,email}

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/users", user)
      .then((res) => alert("registered successfully"))
      .catch((err) => alert("An error occurred."));
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>SignUp</h2>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          value={email}
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Signup
        </button>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
