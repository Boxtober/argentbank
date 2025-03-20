import React, { useState } from "react";
import { login } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("Réponse du serveur :", response); // Inspecte la réponse
      if (response.body && response.body.token) {
        // Vérifie la présence du token dans body
        console.log("Connexion réussie, redirection vers profil...");
        setTimeout(() => {
          navigate("/profile"); // Redirige vers la page de profil après connexion réussie
        }, 500); // Délai de 500ms pour tester la redirection
      } else {
        console.log("Aucun token trouvé dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      console.log("Détails de l'erreur :", error.response);
    }
  };

  //   const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  //  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await login({ email, password });
  //     console.log("Réponse du serveur :", response);
  //     if (response.token) {
  //       navigate("/profile"); // Redirige vers la page de profil après connexion réussie
  //     }
  //   } catch (error) {
  //     console.error("Erreur de connexion :", error);
  //     console.log("Détails de l'erreur :", error.response);
  //   }
  // };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { login } from "../../services/apiService";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login({ email, password });
//       console.log("Réponse du serveur :", response);
//       navigate("/profile");
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

// import React, { useState } from "react";
// import "./login.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username.trim()) {
//       setError("nooooooooooooo");
//       return;
//     }

//     setError("");
//   };

//   return (
//     <div className="sign-in-content">
//       <FontAwesomeIcon icon={faUserCircle} />
//       <h1>Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-wrapper">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {error && <p className="error-message">{error}</p>}
//         </div>
//         <div className="input-wrapper">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" />
//         </div>
//         <div className="input-remember">
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <button type="submit" className="sign-in-button">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
