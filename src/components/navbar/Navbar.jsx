import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../designs/img/argentBankLogo.png";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../services/apiService";
const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.auth.firstName);
  console.log("token de navbar", token);
  console.log("firstName de navbar", firstName);
  const handleLogout = () => {
    dispatch(logout()); // Déclencher la déconnexion
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
      <div>
        {token ? (
          <>
            <NavLink
              to="/user"
              className={(nav) =>
                nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
              }>
              <FontAwesomeIcon icon={faUserCircle} />
              {firstName}
            </NavLink>
            <button className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign out
            </button>
          </>
        ) : (
          <NavLink
            to="/sign-in"
            className={(nav) =>
              nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
            }>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
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

// const Navbar = () => {
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
//       <div>
//         <NavLink
//           to="/user"
//           className={(nav) =>
//             nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
//           }>
//           <FontAwesomeIcon icon={faUserCircle} />
//           {firstName}
//         </NavLink>
//         <NavLink
//           to="/sign-in"
//           className={(nav) =>
//             nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
//           }>
//           <FontAwesomeIcon icon={faSignOut} />
//           Sign In
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
