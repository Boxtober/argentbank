import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/apiService";
import { setToken } from "../../redux/authSlice"; // Action Redux pour mettre à jour le token
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      if (response.body.token) {
        console.log("Connexion réussie, token récupéré :", response.body.token);
        // stocke le token dans Redux
        dispatch(setToken(response.body.token));
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      } else {
        console.log("Token manquant dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default SignIn;
