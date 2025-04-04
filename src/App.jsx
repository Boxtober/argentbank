import React from "react";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./pages/sign/SignIn";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer.jsx";
import Profil from "./pages/profil/Profil";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profil />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
