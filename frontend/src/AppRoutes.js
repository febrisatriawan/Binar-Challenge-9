import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Games/Game";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import { onAuthStateChanged } from "firebase/auth";
import firebaseAuth from "./config/firebaseAuth";
import AuthContext from "./context/AuthContext";

const AppRoutes = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setAuthenticatedUser(user);
    });
  }, []);
  return (
    <>
      <AuthContext.Provider value={authenticatedUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile/" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
};

export default AppRoutes;
