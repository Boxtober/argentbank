import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./pages/sign/SignIn";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/login/Login";
import Profil from "./pages/profil/Profil";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profil />} />

        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
