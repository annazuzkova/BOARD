import React, { useState, useEffect } from "react";
import img1 from "./imgSlider.png";
import img2 from "./imgSlider1.png";
import img3 from "./imgSlider2.png";
import img4 from "./imgSlider3.png";
import img5 from "./imgSlider4.png";
import img6 from "./imgSlider5.png"; 
import './Section2.scss'
import {Link } from "react-router-dom";

function Section2() {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  const getImage = (i) => images[(i + images.length) % images.length];

  const prevImage = getImage(index - 1);
  const currentImage = getImage(index);
  const nextImage = getImage(index + 1);

  const handleLeftClick = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section2">
      <div className="section2-text">
       <h1 className="main-title">
        CHOOSE YOUR <br /><span className="gradient-text">FAVORITE</span> GAMES
      </h1>
        <p className="main-text">Offer sneak peeks and previews of upcoming games, including </p>
        <p className="main-text">trailers, screenshots, and information about release.</p>
      </div>

      <div className="slider-fullscreen">
        <div className="side-zone left-zone" onClick={handleLeftClick}></div>

        <div className="slider-track">
          <img src={prevImage} alt="prev" className="slide-img small" />
          <img src={currentImage} alt="current" className="slide-img active" />
          <img src={nextImage} alt="next" className="slide-img small" />
        </div>

        <div className="side-zone right-zone" onClick={handleRightClick}></div>
      </div>

       <div className="section2-buttons">
          <Link to="/game" className="btn-buy"><span>VIEW ALL</span></Link>
          <button className="btn-play"><span>PLAY NOW</span></button>
        </div>
    </section>
  );
}

export default Section2;