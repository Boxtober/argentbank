// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getProfile, updateProfile, logout } from "../../services/apiService";
// import { useNavigate } from "react-router-dom";

// const Profil = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.token);
//   console.log("Token dans le state : ", token);
//   useEffect(() => {
//     console.log("Composant profile monté");

//     const fetchProfile = async () => {
//       if (token) {
//         try {
//           const response = await getProfile(token);
//           console.log("Réponse du profil :", response);
//           setUser(response.data.body);
//           setFirstName(response.data.body.firstName);
//           setLastName(response.data.body.lastName);
//         } catch (error) {
//           console.error("Erreur :", error);
//           navigate("/sign-in");
//         }
//       } else {
//         console.log("Aucun token trouvé");
//       }
//     };

//     fetchProfile();
//   }, [token, navigate]);

//   if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Profil</h2>
      <form>
        onSubmit={handleUpdate}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h1>{{ firstName }}</h1>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Maj</button>
      </form>
      <button onClick={handleLogout}>déconnecter</button>
    </div>
  );
};

// export default Profil;

import React, { useEffect, useState } from "react";
import { getProfile, updateProfile, logout } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
const Profil = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Composant Profile monté");

    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        console.log("Réponse du profil :", response);
        setUser(response.data.body);
        setFirstName(response.data.body.firstName);
        setLastName(response.data.body.lastName);
      } catch (error) {
        console.error("Erreur lors de la récupération du profil:", error);
        navigate("/sign-in");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <p>Chargement...</p>;
  // const Profil = () => {
  //   const [user, setUser] = useState(null);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("useEffect exécuté");

  //     const fetchProfile = async () => {
  //       try {
  //         const response = await getProfile();
  //         console.log("Réponse du profil :", response);
  //         setUser(response.data.body);
  //         setFirstName(response.data.body.firstName);
  //         setLastName(response.data.body.lastName);
  //       } catch (error) {
  //         console.error("Erreur lors de la récupération du profil:", error);
  //         navigate("/sign-in"); // Redirige vers la page de connexion si une erreur survient
  //       }
  //     };

  //     fetchProfile();
  //   }, [navigate]);

  //   const handleUpdate = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await updateProfile({ firstName, lastName });
  //       alert("Profil mis à jour !");
  //     } catch (error) {
  //       console.error(
  //         "Erreur de mise à jour",
  //         error.response?.data?.message || error.message
  //       );
  //     }
  //   };

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/"); // Redirection après déconnexion
  //   };

  //   if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Profil</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Mettre à jour</button>
      </form>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Profil;

// import React, { useEffect, useState } from "react";
// import { getProfile, updateProfile, logout } from "../../services/apiService";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await getProfile();
//         setUser(response.data.body);
//         setFirstName(response.data.body.firstName);
//         setLastName(response.data.body.lastName);
//       } catch (error) {
//         console.error("Erreur lors de la récupération du profil");
//         navigate("/sign-in"); // Redirige si pas connecté
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProfile({ firstName, lastName });
//       alert("Profil mis à jour !");
//     } catch (error) {
//       console.error("Erreur de mise à jour", error.response?.data?.message);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   if (!user) return <p>Chargement...</p>;

//   return (
//     <div>
//       <h2>Profil</h2>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <button type="submit">Mettre à jour</button>
//       </form>
//       <button onClick={handleLogout}>Se déconnecter</button>
//     </div>
//   );
// };

// export default Profile;
