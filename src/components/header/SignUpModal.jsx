import React, { useState } from "react";

const SignUpModal = ({ open, onClose, onSuccess }) => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  if (!open) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) return;

    // Локально додаємо користувача
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === regEmail)) {
      alert("User already exists");
      return;
    }

    const newUser = { name: regName, email: regEmail, password: regPassword, favorites: [] };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    onSuccess?.(regName, regEmail); // передаємо ім'я та email у Header
    onClose();
    alert("Registration successful!");

    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  return (
    <div className="support-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="support-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="support-close" onClick={onClose} aria-label="Close">✕</button>
        <h2>Sign Up</h2>
        <form className="support-form" onSubmit={handleRegister}>
          <label>
            Name
            <input value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="email@example.com" required />
          </label>
          <label>
            Password
            <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="Enter password" required />
          </label>
          <div className="support-actions">
            <button type="submit" className="btn-submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
