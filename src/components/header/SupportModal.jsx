import React, { useState } from "react";
import "./Header.scss";

const SupportModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("supportMessages")) || []);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMsg = { id: Date.now(), name, email, message: messageText, createdAt: new Date().toISOString() };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("supportMessages", JSON.stringify(updated));
    setName(""); setEmail(""); setMessageText("");
  };

  const clearAll = () => {
    if (window.confirm("Delete all messages?")) {
      setMessages([]);
      localStorage.removeItem("supportMessages");
    }
  };

  return (
    <div className="support-overlay" onClick={onClose}>
      <div className="support-modal" onClick={(e) => e.stopPropagation()}>
        <button className="support-close" onClick={onClose}>✕</button>
        <h2>Support</h2>
        <form className="support-form" onSubmit={handleSubmit}>
          <label>Name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </label>
          <label>Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </label>
          <label>Message *
            <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} placeholder="Describe your issue" required />
          </label>
          <div className="support-actions">
            <button type="submit" className="btn-submit">Send</button>
            <button type="button" className="btn-clear" onClick={clearAll}>Delete all</button>
          </div>
        </form>
        <div className="support-list">
          <h3>Saved messages</h3>
          {messages.length === 0 ? <p className="muted">No message yet.</p> :
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
            </ul>}
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
