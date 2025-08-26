import React from "react";
import { useState } from "react";
import img from "./img/imgSection3.png"
import "../App.css"


function Section3 () {
     const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="section3">
            <div className="section3-content">
                <img className="img-section3" src={img} alt="img"></img>

                <div className="section1-content">
        <h1 className="main-title">
          DISCOVER THE <br />
          <span className="gradient-text">VIRTUAL</span> REALITY <br />
          GAMING 
        </h1>
        <p className="main-text">
          A well-designed gaming header often incorporates elements such 
          as game characters, iconic symbols, vibrant colors, and dynamic 
          visuals to convey excitement, adventure, and the immersive nature 
          of gaming.
        </p>

        <div className="section1-buttons">
           <button 
            className="btn-play" 
            onClick={() => setIsModalOpen(true)}
          >
            <span>PLAY NOW</span>
          </button>
          </div>
          </div>
            </div>

            <div className="marquee-wrapper-section3">
    <div className="marquee-section3">
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>

   {/* MODAL */}
      {isModalOpen && (
        <div className="support-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="support-close" 
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <p style={{ textAlign: "center", fontSize: "18px" }}>
             Sorry, this is not working right now. :/
            </p>
          </div>
        </div>
      )}
        </section>
    )
}

export default Section3