import React, { useState, useEffect } from "react";
import logo from "./img/Frame.png";
import logo2 from "./img/Logo2.png";
import "../App.css";

const API_KEY = "9376cd766bf0468ca165774f519e7a06"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); 
  const [messages, setMessages] = useState([]);

  //  SUPPORT
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  // FEATURES
  const [query, setQuery] = useState("");
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(false);

  // AUTH
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  const [user, setUser] = useState(null);

  // SIGN UP
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // LOG IN
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("supportMessages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("error ", e);
      }
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSupportOpen(false);
        setFeaturesOpen(false);
        setSignUpOpen(false);
        setLogInOpen(false);
        setAboutOpen(false); 
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  const openSupport = (e) => {
    e.preventDefault();
    setSupportOpen(true);
  };

  const openFeatures = (e) => {
    e.preventDefault();
    setFeaturesOpen(true);
  };

  const openAbout = (e) => {
    e.preventDefault();
    setAboutOpen(true);
  };

  const closeSupport = () => {
    setSupportOpen(false);
    setName("");
    setEmail("");
    setMessageText("");
  };

  const closeFeatures = () => {
    setFeaturesOpen(false);
    setQuery("");
    setGameData(null);
  };

  const closeAbout = () => {
    setAboutOpen(false);
  };

  const closeSignUp = () => {
    setSignUpOpen(false);
    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  const closeLogIn = () => {
    setLogInOpen(false);
    setLogEmail("");
    setLogPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: name.trim() || "Anonim",
      email: email.trim() || "",
      message: messageText.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("supportMessages", JSON.stringify(updated));

    setName("");
    setEmail("");
    setMessageText("");
  };

  const clearAllMessages = () => {
    if (!window.confirm("Delete all message?")) return;
    setMessages([]);
    localStorage.removeItem("supportMessages");
  };

  const searchGame = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setGameData(null);

    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setGameData(data.results[0]);
      } else {
        setGameData("not_found");
      }
    } catch (err) {
      console.error(err);
      setGameData("error");
    }
    setLoading(false);
  };

  // Sign Up
  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) return;

    localStorage.setItem(
      "userData",
      JSON.stringify({ name: regName, email: regEmail, password: regPassword })
    );

    setUser(regName.trim());
    closeSignUp();
  };

  // Log In
  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      savedUser &&
      savedUser.email === logEmail.trim() &&
      savedUser.password === logPassword.trim()
    ) {
      setUser(savedUser.name);
      closeLogIn();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="logo-text">board</span>
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
         <a href="#product" onClick={(e) => {
          e.preventDefault();
          document.getElementById("games-section")?.scrollIntoView({ behavior: "smooth" });
        }}>
          PRODUCTS
        </a>

        <a href="#app" onClick={(e) => {
          e.preventDefault();
          document.getElementById("games-section")?.scrollIntoView({ behavior: "smooth" });
        }}>
          APPS & GAMES
        </a>
          <a href="#features" onClick={openFeatures}>FEATURES</a>
          <a href="#support" onClick={openSupport}>SUPPORT</a>
          <a href="#about" onClick={openAbout}>ABOUT</a>
        </nav>

        <div className="lock-icon">
          {user ? (
            <span className="user-name">👤 {user}</span>
          ) : (
            <>
              <button className="btn-log-in" onClick={() => setLogInOpen(true)}>
                Log In
              </button>
              <button className="btn-sign-up" onClick={() => setSignUpOpen(true)}>
                Sign Up
              </button>
            </>
          )}
          <img alt="lock" src={logo2} />
        </div>

        <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </header>

       {/* 🔹 MODAL ABOUT */}
      {aboutOpen && (
        <div
          className="support-overlay"
          onClick={closeAbout}
        >
          <div
            className="support-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="support-close"
              onClick={closeAbout}
              aria-label="Close"
            >
              ✕
            </button>
            <h2>About This Site</h2>
            <p>⋆.˚⋆ ˚｡⋆୨୧˚⋆𖦹.✧⋆˚⋅ ˚✮</p>
            <p>
              Welcome to our awesome gaming site! 🎮 Here you can explore cool
              projects, interactive 3D models, and experience the future of
              browser games in one place. Let’s play and have fun together!
            </p>
          </div>
        </div>
      )}

       {/* Sign Up */}
      {signUpOpen && (
        <div
          className="support-overlay"
          onClick={closeSignUp}
          role="dialog"
          aria-modal="true"
        >
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="support-close"
              onClick={closeSignUp}
              aria-label="Close"
            >
              ✕
            </button>
            <h2>Sign Up</h2>
            <form className="support-form" onSubmit={handleRegister}>
              <label>
                Name
                <input
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </label>
              <div className="support-actions">
                <button type="submit" className="btn-submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Log In */}
      {logInOpen && (
        <div
          className="support-overlay"
          onClick={closeLogIn}
          role="dialog"
          aria-modal="true"
        >
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="support-close"
              onClick={closeLogIn}
              aria-label="Close"
            >
              ✕
            </button>
            <h2>Log In</h2>
            <form className="support-form" onSubmit={handleLogin}>
              <label>
                Email
                <input
                  type="email"
                  value={logEmail}
                  onChange={(e) => setLogEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={logPassword}
                  onChange={(e) => setLogPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </label>
              <div className="support-actions">
                <button type="submit" className="btn-submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    

      {/* modal SUPPORT */}
      {supportOpen && (
        <div className="support-overlay" onClick={closeSupport} role="dialog" aria-modal="true">
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button className="support-close" onClick={closeSupport} aria-label="Close">✕</button>

            <h2>Support</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </label>
              <label>
                Email
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
              </label>
              <label>
                Message *
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Please, describe the problem"
                  required
                />
              </label>

              <div className="support-actions">
                <button type="submit" className="btn-submit">Send</button>
                <button type="button" className="btn-clear" onClick={clearAllMessages}>Delete all</button>
              </div>
            </form>

            <div className="support-list">
              <h3>Saved message</h3>
              {messages.length === 0 ? (
                <p className="muted">No message yet.</p>
              ) : (
                <ul>
                  {messages.map((m) => (
                    <li key={m.id} className="support-item">
                      <div className="meta">
                        <strong>{m.name}</strong>
                        <span className="date">{new Date(m.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="msg">{m.message}</div>
                      {m.email && <div className="email">📧 {m.email}</div>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* modal FEATURES */}
      {featuresOpen && (
        <div className="support-overlay" onClick={closeFeatures} role="dialog" aria-modal="true">
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button className="support-close" onClick={closeFeatures} aria-label="Close">✕</button>

            <h2>We can show game statistics</h2>

            <div className="search-block">
              <input
                type="text"
                placeholder="Game name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn-buy" onClick={searchGame}>Search</button>
            </div>

            {loading && <p>Loading...</p>}

            {gameData && gameData !== "not_found" && gameData !== "error" && (
              <div className="game-info">
                <img src={gameData.background_image} alt={gameData.name} />
                <h3>{gameData.name}</h3>
                <p>Rating: {gameData.rating} / 5</p>
                <p>Release date: {gameData.released}</p>
                <p>Genre: {gameData.genres.map((g) => g.name).join(", ")}</p>
                <p>
                  Platform:{" "}
                  {gameData.parent_platforms
                    .map((p) => p.platform.name)
                    .join(", ")}
                </p>
              </div>
            )}

            {gameData === "not_found" && <p>Game not found</p>}
            {gameData === "error" && <p>Data loading error</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;