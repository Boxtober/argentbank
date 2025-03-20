import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../services/apiService"; // Assurez-vous que `updateProfile` existe
import { logout } from "../../services/apiService";

const Profil = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((response) => {
          console.log("Profil récupéré :", response.data);
          setProfile(response.data.body);
          setFirstName(response.data.body.firstName);
          setLastName(response.data.body.lastName);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du profil", error);
          setError(
            "Une erreur est survenue lors de la récupération du profil."
          );
          setLoading(false);
        });
    }
  }, [token]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      setError("Les champs sont obligatoires");
      return;
    }

    const updatedData = {
      firstName,
      lastName,
    };

    updateProfile(updatedData, token)
      .then((response) => {
        console.log("Profil mis à jour :", response.data);
        setProfile(response.data.body); // Mettre à jour les données dans le state
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du profil", error);
        setError("Une erreur est survenue lors de la mise à jour du profil.");
      });
  };

  const handleLogout = () => {
    dispatch(logout()); // Supprimer le token et rediriger l'utilisateur
    window.location.href = "/login"; // Rediriger vers la page de connexion
  };

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
      <button onClick={handleLogout}>Déconnecter</button>
    </div>
  );
};

export default Profil;
