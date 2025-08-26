import React, { useState, useEffect } from "react";
import SupportModal from "./SupportModal";
import FeaturesModal from "./FeaturesModal";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import logo from './Frame.svg'
import "./Header.scss";
import { Link } from "react-router-dom";

const API_KEY = "9376cd766bf0468ca165774f519e7a06";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSupportOpen(false);
        setFeaturesOpen(false);
        setSignUpOpen(false);
        setLogInOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const openSupport = (e) => { e.preventDefault(); setSupportOpen(true); };
  const openFeatures = (e) => { e.preventDefault(); setFeaturesOpen(true); };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");
    setUser(null);
  };

  const handleSuccess = (name, email, favorites = []) => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="board" className="logo-icon"/>
          <span className="logo-text">board</span>
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/webpage">HOME</Link>
          <Link to="/game">APPS & GAMES</Link>
          <a href="#features" onClick={openFeatures}>FEATURES</a>
          <a href="#support" onClick={openSupport}>SUPPORT</a>
          <a href="#about">ABOUT</a>
        </nav>

        <div className="lock-icon">
          {user ? (
            <>
              <span className="user-name">👤 {user.name}</span>
              <button className="user-name" onClick={handleLogout}>{user.name}</button>
            </>
          ) : (
            <>
              <button type="button" className="btn-log-in" onClick={() => setLogInOpen(true)}>Log In</button>
              <button type="button" className="btn-sign-up" onClick={() => setSignUpOpen(true)}>Sign Up</button>
            </>
          )}
        </div>

        <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </header>

      {/* Модалки */}
      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
      <FeaturesModal open={featuresOpen} onClose={() => setFeaturesOpen(false)} apiKey={API_KEY} />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} onSuccess={handleSuccess} />
      <LogInModal open={logInOpen} onClose={() => setLogInOpen(false)} onSuccess={handleSuccess} />
    </>
  );
};

export default Header;
