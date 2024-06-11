import React, { useMemo, useState } from "react";
import { signIn, signUp } from "../../services/auth/auth.service";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = async () => {
    const user = await signIn(email, password); // This is the same as calling signInWithEmailAndPassword from firebase/auth
    console.log(user);
  };

  const handleRegister = async () => {
    try {
      const user = await signUp({
        email, password, firstName, lastName
      });
      console.log(user);
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };

  const isValid = useMemo(()=>{

    if(isLogin){
      return !!email && !!password;
    }else{
      return !!email && !!password && (confirmPassword === password) && !!firstName && !!lastName;
    }
  },[email, password, confirmPassword, firstName, lastName, isLogin])

  console.log({isValid});
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Sakura Academy</h2>
        <label htmlFor="email" className="login-label">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="login-input"
        />
        <label htmlFor="password" className="login-label">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="login-input"
        />
        {isLogin ? (
          <button onClick={handleLogin} disabled={!isValid} className="login-button">
            Iniciar Sesión
          </button>
        ) : (
          <>
            <label htmlFor="confirmPassword" className="login-label">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Contraseña"
              className="login-input"
            />
            <label htmlFor="firstName" className="login-label">Nombre</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Nombre"
              className="login-input"
            />
            <label htmlFor="lastName" className="login-label">Apellido</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Apellido"
              className="login-input"
            />
            <button onClick={handleRegister} disabled={!isValid} className="login-button">
              Registrarse
            </button>
          </>
        )}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="register-button"
        >
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
};

export default Login;
