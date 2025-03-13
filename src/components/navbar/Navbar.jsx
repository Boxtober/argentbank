import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../designs/img/argentBankLogo.png";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
        {/* <NavLink
          to="/user"
          className={(nav) =>
            nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
          }>
          <FontAwesomeIcon icon={faUser} />
          Tony
        </NavLink> */}
        <NavLink
          to="/user"
          className={(nav) =>
            nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
          }>
          <FontAwesomeIcon icon={faUser} />
          Tony
        </NavLink>

        <NavLink
          to="/sign-in"
          className={(nav) =>
            nav.isActive ? "nav-active main-nav-item" : "main-nav-item"
          }>
          <FontAwesomeIcon icon={faUser} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./navbar.scss";

// const Navbar = () => {
//   return (
//     <nav className="main-nav">
//       <a className="main-nav-logo">
//         <img
//           className="main-nav-logo-image"
//           src="src\designs\img\argentBankLogo.png"
//           alt="Argent Bank Logo"
//         />
//         <h1 className="sr-only">Argent Bank</h1>
//       </a>
//       <div>
//         <a className="main-nav-item" href="./sign-in.html">
//           <i className="fa fa-user-circle"></i>
//           Sign In
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
