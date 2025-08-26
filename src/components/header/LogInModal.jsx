import React, { useState } from "react";

const LogInModal = ({ open, onClose, onSuccess }) => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  if (!open) return null;

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === logEmail && u.password === logPassword);

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    onSuccess?.(user.name, user.email, user.favorites);
    onClose();

    localStorage.setItem("user", JSON.stringify({ name: user.name, email: user.email }));
    localStorage.setItem("favorites", JSON.stringify(user.favorites));

    setLogEmail("");
    setLogPassword("");
  };

  return (
    <div className="support-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="support-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="support-close" onClick={onClose} aria-label="Close">✕</button>
        <h2>Log In</h2>
        <form className="support-form" onSubmit={handleLogin}>
          <label>
            Email
            <input type="email" value={logEmail} onChange={(e) => setLogEmail(e.target.value)} placeholder="email@example.com" required />
          </label>
          <label>
            Password
            <input type="password" value={logPassword} onChange={(e) => setLogPassword(e.target.value)} placeholder="Enter password" required />
          </label>
          <div className="support-actions">
            <button type="submit" className="btn-submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInModal;
