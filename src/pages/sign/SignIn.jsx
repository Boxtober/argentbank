import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/apiService";
import { setToken } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Login from "../../components/login/Login";
import "./signin.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });
      if (response.body.token) {
        dispatch(setToken(response.body.token));
        navigate("/profile");
      } else {
        navigate("/");
        setError("Deja connecté");
      }
    } catch (error) {
      setError("Erreur de connexion.");
    }
  };

  return (
    <div className="sign-in-page  bg-dark">
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

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../../services/apiService";
// import { setToken } from "../../redux/authSlice"; // Action Redux pour mettre à jour le token
// import { useNavigate } from "react-router-dom";
// import Login from "../../components/login/Login";
// const SignIn = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await login({ email, password });
//       if (response.body.token) {
//         console.log("Connexion réussie, token récupéré :", response.body.token);
//         // stocke le token dans Redux
//         dispatch(setToken(response.body.token));
//         setTimeout(() => {
//           navigate("/profile");
//         }, 500);
//       } else {
//         console.log("Token manquant dans la réponse.");
//       }
//     } catch (error) {
//       console.error("Erreur lors de la connexion :", error);
//       setError("Erreur lors de la connexion, veuillez réessayer.");
//     }
//   };

//   return (
//     <div className="sign-in-page">
//       <Login
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         error={error}
//         setError={setError}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//     // <form onSubmit={handleSubmit}>
//     //   <input
//     //     type="email"
//     //     value={email}
//     //     onChange={(e) => setEmail(e.target.value)}
//     //     placeholder="Email"
//     //   />
//     //   <input
//     //     type="password"
//     //     value={password}
//     //     onChange={(e) => setPassword(e.target.value)}
//     //     placeholder="Mot de passe"
//     //   />
//     //   <button type="submit">Se connecter</button>
//     // </form>
//   );
// };

// export default SignIn;
