import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProfile, updateProfile, logout } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    console.log("Composant profile monté");

    const fetchProfile = async () => {
      if (token) {
        try {
          const response = await getProfile(token);
          console.log("Réponse du profil :", response);
          setUser(response.data.body);
          setFirstName(response.data.body.firstName);
          setLastName(response.data.body.lastName);
        } catch (error) {
          console.error("Erreur :", error);
          navigate("/sign-in");
        }
      } else {
        console.log("Aucun token trouvé");
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (!user) return <p>Chargement...</p>;

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

export default Profil;
