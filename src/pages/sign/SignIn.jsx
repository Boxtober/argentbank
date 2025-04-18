import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/apiService";
import { setToken } from "../../redux/authSlice";
import { useNavigate, Navigate } from "react-router-dom";
import Login from "../../components/login/Login";
import "./signin.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      if (response.body.token) {
        dispatch(setToken(response.body.token));
        navigate("/profile");
      } else {
        setError("Échec de la connexion");
      }
    } catch (error) {
      setError("Erreur de connexion.");
    }
  };

  return (
    <div className="sign-in-page bg-dark">
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignIn;
