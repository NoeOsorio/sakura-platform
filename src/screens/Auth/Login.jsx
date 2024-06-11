import React, { useState } from "react";
import { signIn, signUp } from "../../services/auth/auth.service";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await signIn(email, password); // This is the same as calling signInWithEmailAndPassword from firebase/auth
    console.log(user);
  };

  const handleRegister = async () => {
    try {
      const user = await signUp(email, password);
      console.log(user);
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };

  return (
    <div className="login-container">
    <div className="login-form">
      <h2 className="login-title">Sakura Academy</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <button onClick={handleRegister} className="register-button">
        Register
      </button>
    </div>
  </div>
  );
};

export default Login;
