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
      // Si token, appel la fonction getProfile(token)
      // envoie une requête api pour récupérer le profil
      getProfile(token)
        .then((response) => {
          console.log("Profil récupéré :", response.data);
          dispatch(setProfile(response.data.body)); // maj du store
        })
        .catch((error) => console.error("Erreur profil :", error));
    }
  }, [token, dispatch]); //se déclenche uniquement si le token change

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
