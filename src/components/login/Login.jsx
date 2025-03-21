import React from "react";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  setError,
  handleSubmit,
}) => {
  return (
    <div className="main signInMain">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username / Email ???</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Gestion de l'email
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Gestion du mot de passe
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>{" "}
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { login } from "../../services/apiService";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setToken } from "../../redux/authSlice"; // Importer l'action setToken

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // fonction dispatch de Redux

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login({ email, password });
//       console.log("Réponse du serveur :", response);
//       if (response.body && response.body.token) {
//         console.log("Connexion réussie, redirection vers profil...");
//         //dispatch(setToken(response.body.token));
//         setTimeout(() => {
//           navigate("/profile");
//         }, 500);
//       } else {
//         console.log("Aucun token trouvé dans la réponse.");
//       }
//     } catch (error) {
//       console.error("Erreur de connexion :", error);
//       console.log("Détails de l'erreur :", error.response);
//     }
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
