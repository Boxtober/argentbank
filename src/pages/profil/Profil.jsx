import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../services/apiService";
import { setFirstName } from "../../redux/authSlice";
import "./profil.scss";
import AccountCard from "../../components/accountCard/AccountCard";

const Profil = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firstNameFromStore = useSelector((state) => state.auth.firstName);
  const [profile, setProfile] = useState(null);
  const [firstName, setFirstNameLocal] = useState(firstNameFromStore); // utilisation d'un état local
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((response) => {
          console.log("Profil récupéré :", response.data);
          setProfile(response.data.body);
          setFirstNameLocal(response.data.body.firstName); // maj état local
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
        setProfile(response.data.body);
        dispatch(setFirstName(response.data.body.firstName)); // maj du store avec la valeur modifié
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du profil", error);
        setError("Une erreur est survenue lors de la mise à jour du profil.");
      });
  };

  const handleCancel = () => {
    if (profile) {
      setFirstNameLocal(profile.firstName); // réinit état local
      setLastName(profile.lastName);
    }
  };

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const accountData = [
    {
      title: "Argent Bank Checking (x8349)",
      price: "2,082.79",
      state: "Available Balance",
    },
    {
      title: "Argent Bank Checking (x8349)",
      price: "2,082.79",
      state: "Available Balance",
    },
    {
      title: "Argent Bank Checking (x8349)",
      price: "2,082.79",
      state: "Available Balance",
    },
  ];

  return (
    <div className="main bg-dark">
      <div class="header">
        <h1>
          Welcome back <br></br> {firstName} {lastName}
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>

      <h2>Profil</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstNameLocal(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>

      <section className="">
        <h2 className="sr-only">yoo</h2>
        {accountData.map((account, index) => (
          <AccountCard key={index} {...account} />
        ))}
      </section>
    </div>
  );
};

export default Profil;
