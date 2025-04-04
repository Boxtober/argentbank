import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../services/apiService";
import { setProfile } from "../../redux/authSlice";
import "./profil.scss";
import AccountCard from "../../components/accountCard/AccountCard";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { firstName, lastName, email } = useSelector((state) => state.auth);
  const [profile, setProfileData] = useState(null);
  const [firstNameLocal, setFirstNameLocal] = useState(firstName);
  const [lastNameLocal, setLastNameLocal] = useState(lastName);
  const [error, setError] = useState(null);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((response) => {
          const userProfile = response.data.body;
          setProfileData(userProfile);
          dispatch(setProfile(userProfile));
          setFirstNameLocal(userProfile.firstName);
          setLastNameLocal(userProfile.lastName);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du profil", error);
          setError(
            "Une erreur est survenue lors de la récupération du profil."
          );
        });
    } else {
      setError("Connectez-vous !");

      navigate("/");
    }
  }, [token, dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!firstNameLocal.trim()) {
      setFirstNameError("Vous devez renseigner un prénom");
      isValid = false;
    }
    if (!lastNameLocal.trim()) {
      setLastNameError("Vous devez renseigner un nom");
      isValid = false;
    }

    if (!isValid) return;

    const updatedData = { firstName: firstNameLocal, lastName: lastNameLocal };
    updateProfile(updatedData, token)
      .then((response) => {
        const updatedProfile = response.data.body;
        setProfileData(updatedProfile);
        dispatch(setProfile(updatedProfile));
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du profil", error);
        setError("Une erreur est survenue lors de la mise à jour du profil.");
      });
  };

  const handleCancel = () => {
    if (profile) {
      setFirstNameLocal(profile.firstName);
      setLastNameLocal(profile.lastName);
    }
    setFirstNameError("");
    setLastNameError("");
    setIsEditing(false);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstNameLocal(value);
    setFirstNameError(value.trim() ? "" : "Vous devez renseigner un prénom");
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastNameLocal(value);
    setLastNameError(value.trim() ? "" : "Vous devez renseigner un nom");
  };

  if (error) {
    return <p>{error}</p>;
  }

  const isSaveDisabled =
    !firstNameLocal.trim() ||
    !lastNameLocal.trim() ||
    firstNameError ||
    lastNameError;

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
    <div className="main profilMain bg-dark">
      {!isEditing ? (
        <div className="header">
          <h1>
            Welcome back <br />
            {firstName} {lastName}
          </h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <h2>Welcome back</h2>
          <div className="row">
            <div>
              <input
                type="text"
                value={firstNameLocal}
                onChange={handleFirstNameChange}
              />
            </div>
            <div>
              <input
                type="text"
                value={lastNameLocal}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div className="col">
            {firstNameError && <p className="error">{firstNameError}</p>}
            {lastNameError && <p className="error">{lastNameError}</p>}
            <div className="row">
              <button
                type="submit"
                className="formBtn"
                disabled={isSaveDisabled}>
                Save
              </button>
              <button type="button" className="formBtn" onClick={handleCancel}>
                Cancel
              </button>{" "}
            </div>
          </div>
        </form>
      )}

      <section>
        {accountData.map((account, index) => (
          <AccountCard key={index} {...account} />
        ))}
      </section>
    </div>
  );
};

export default Profil;

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfile, updateProfile } from "../../services/apiService";
// import { setProfile } from "../../redux/authSlice";
// import "./profil.scss";
// import AccountCard from "../../components/accountCard/AccountCard";
// import { useNavigate } from "react-router-dom";

// const Profil = () => {
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.auth.token);
//   const { firstName, lastName, email } = useSelector((state) => state.auth);
//   const [profile, setProfileData] = useState(null);
//   const [firstNameLocal, setFirstNameLocal] = useState(firstName); // Utilisation de l'état local
//   const [lastNameLocal, setLastNameLocal] = useState(lastName); // Utilisation de l'état local
//   const [error, setError] = useState(null);
//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [isEditing, setIsEditing] = useState(false); // Gérer l'affichage du formulaire
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       getProfile(token)
//         .then((response) => {
//           const userProfile = response.data.body;
//           setProfileData(userProfile);
//           dispatch(setProfile(userProfile));
//           setFirstNameLocal(userProfile.firstName);
//           setLastNameLocal(userProfile.lastName);
//         })
//         .catch((error) => {
//           console.error("Erreur lors de la récupération du profil", error);
//           setError(
//             "Une erreur est survenue lors de la récupération du profil."
//           );
//         });
//     } else {
//       setError("Connectez-vous !");
//     }
//   }, [token, dispatch]);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     let isValid = true;

//     if (!firstNameLocal.trim()) {
//       setFirstNameError("Vous devez renseigner un prénom");
//       isValid = false;
//     } else {
//       setFirstNameError("");
//     }
//     if (!lastNameLocal.trim()) {
//       setLastNameError("Vous devez renseigner un nom");
//       isValid = false;
//     } else {
//       setLastNameError("");
//     }

//     if (!isValid) return;
//     const updatedData = { firstName: firstNameLocal, lastName: lastNameLocal };
//     updateProfile(updatedData, token)
//       .then((response) => {
//         const updatedProfile = response.data.body;
//         setProfileData(updatedProfile);
//         dispatch(setProfile(updatedProfile)); // Met à jour le store avec les nouvelles données
//         setIsEditing(false); // Ferme le formulaire
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la mise à jour du profil", error);
//         setError("Une erreur est survenue lors de la mise à jour du profil.");
//       });
//   };

//   const handleCancel = () => {
//     if (profile) {
//       setFirstNameLocal(profile.firstName); // Réinitialiser l'état local
//       setLastNameLocal(profile.lastName);
//     }
//     setFirstNameError("");
//     setLastNameError("");
//     setIsEditing(false);
//     setIsEditing(false);
//   };

//   if (!token) {
//     navigate("/");
//     return <p>Connectez-vous pour accéder à votre profil.</p>;
//     // rediriger sur page dacceuil
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }
//   const isSaveDisabled =
//     !firstNameLocal.trim() ||
//     !lastNameLocal.trim() ||
//     firstNameError ||
//     lastNameError;

//   const accountData = [
//     {
//       title: "Argent Bank Checking (x8349)",
//       price: "2,082.79",
//       state: "Available Balance",
//     },
//     {
//       title: "Argent Bank Checking (x8349)",
//       price: "2,082.79",
//       state: "Available Balance",
//     },
//     {
//       title: "Argent Bank Checking (x8349)",
//       price: "2,082.79",
//       state: "Available Balance",
//     },
//   ];

//   return (
//     <div className="main profilMain bg-dark">
//       {!isEditing ? (
//         <div className="header">
//           <h1>
//             Welcome back <br />
//             {firstName} {lastName}
//           </h1>
//           <button className="edit-button" onClick={() => setIsEditing(true)}>
//             Edit Name
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleUpdate}>
//           <h2>Welcome back</h2>
//           <div className="row">
//             <input
//               type="text"
//               value={firstNameLocal}
//               onChange={(e) => setFirstNameLocal(e.target.value)}
//             />
//             {firstNameError && <p className="error">{firstNameError}</p>}
//             <input
//               type="text"
//               value={lastNameLocal}
//               onChange={(e) => setLastNameLocal(e.target.value)}
//             />
//             {lastNameError && <p className="error">{lastNameError}</p>}
//           </div>
//           <div className="row">
//             <button type="submit" className="formBtn" disabled={isSaveDisabled}>
//               Save
//             </button>
//             <button type="button" className="formBtn" onClick={handleCancel}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       <section>
//         {accountData.map((account, index) => (
//           <AccountCard key={index} {...account} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Profil;
