import React, { useState } from "react";

const FeaturesModal = ({ open, onClose, apiKey }) => {
  const [query, setQuery] = useState("");
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const searchGame = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setGameData(null);

    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) setGameData(data.results[0]);
      else setGameData("not_found");
    } catch (err) {
      console.error(err);
      setGameData("error");
    }
    setLoading(false);
  };

  return (
    <div
      className="support-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="support-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="support-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h2>We can show game statistics</h2>
        <div className="search-block">
          <input
            type="text"
            placeholder="Game name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="btn-buy" onClick={searchGame}>
          <span> Search</span> 
          </button>
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
              {gameData.parent_platforms.map((p) => p.platform.name).join(", ")}
            </p>
          </div>
        )}
        {gameData === "not_found" && <p>Game not found</p>}
        {gameData === "error" && <p>Data loading error</p>}
      </div>
    </div>
  );
};

export default FeaturesModal; 