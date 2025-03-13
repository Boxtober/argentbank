// import React from "react";
// import "./login.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// const Login = () => {
//   return (
//     <div className="sign-in-content">
//       <FontAwesomeIcon icon={faStar} />
//       <h1>Sign In</h1>
//       <form>
//         <div className="input-wrapper">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" />
//         </div>
//         <div className="input-wrapper">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" />
//         </div>
//         <div className="input-remember">
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <button type="submit" className="sign-in-button">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("nooooooooooooo");
      return;
    }

    setError("");
  };

  return (
    <div className="sign-in-content">
      <FontAwesomeIcon icon={faStar} />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
