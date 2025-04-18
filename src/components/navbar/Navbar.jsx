import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../designs/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../services/apiService";
import { setProfile, logout } from "../../redux/authSlice";
import "./navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.auth.firstName);
  console.log("token de navbar", token);
  console.log("firstName de navbar", firstName);
  useEffect(() => {
    if (token) {
      getProfile(token)
        .then((response) => {
          console.log("Profil récupéré :", response.data);
          dispatch(setProfile(response.data.body)); // maj du store
        })
        .catch((error) => console.error("Erreur profil :", error));
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="row">
        {token ? (
          <>
            <NavLink
              to="/profile"
              className={(nav) =>
                nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
              }>
              <FontAwesomeIcon icon={faUserCircle} />
              {firstName}
            </NavLink>
            <button className="btn" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/sign-in"
              className={(nav) =>
                nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
              }>
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../designs/img/argentBankLogo.png";
// import "./navbar.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
// import { logout, getProfile, updateProfile } from "../../services/apiService";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setFirstName } from "../../redux/authSlice";

// const Navbar = () => {
//   const token = useSelector((state) => state.auth.token);
//   const firstName = useSelector((state) => state.auth.firstName);
//   console.log("token de navbar", token);
//   console.log("firstName de navbar", firstName);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (token) {
//       getProfile(token)
//         .then((response) => {
//           console.log("Profil récupéré :", response.data);
//           dispatch(setFirstName(response.data.body.firstName));
//           // setFirstName(response.data.body.firstName);
//           // setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Erreur lors de la récupération du profil", error);
//           setError(
//             "Une erreur est survenue lors de la récupération du profil."
//           );
//           // setLoading(false);
//         });
//     }
//   }, [token]);

//   const handleLogout = () => {
//     dispatch(logout());
//     window.location.href = "/";
//   };
//   //verifier si un token existe -> aller sur profil
//   return (
//     <nav className="main-nav">
//       <NavLink to="/" className="main-nav-logo">
//         <img
//           className="main-nav-logo-image"
//           src={logo}
//           alt="Argent Bank Logo"
//         />
//         <h1 className="sr-only">Argent Bank</h1>
//       </NavLink>
//       <div className="row">
//         {token ? (
//           <>
//             <NavLink
//               to="/profile"
//               className={(nav) =>
//                 nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
//               }>
//               <FontAwesomeIcon icon={faUserCircle} />
//               {firstName}
//             </NavLink>
//             <button className="toto" onClick={handleLogout}>
//               <FontAwesomeIcon icon={faSignOut} />
//               Sign out
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink
//               to="/sign-in"
//               className={(nav) =>
//                 nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
//               }>
//               <FontAwesomeIcon icon={faUserCircle} />
//               Sign In
//             </NavLink>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
