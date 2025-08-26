import React from "react";
import "./Section1.scss"
import BuyForm from "../global/BuyForm";

function Section1() {
  return (
    <section className="section1">
      <div className="section1-content">
        <h1 className="main-title">
          LET YOUR <br />
          MIND <span className="gradient-text">EXPLORE</span> <br />
          NEW WORLD
        </h1>
        <p className="main-text">
          Playing electronic games, whether through consoles, computers,
          mobile phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>

        <div className="section1-buttons">
      <BuyForm className='btn-buy'/>
          <button className="btn-play"><span>PLAY NOW</span></button>
        </div>

        <div className="section1-stats">
          <div><strong>300+</strong><br />Unique Style</div>
          <div><strong className="highlight">200+</strong><br />Project Finished</div>
          <div><strong>500+</strong><br />Happy Customer</div>
        </div>

       
      </div>
      
      
      
       <div className="marquee-wrapper">
    <div className="marquee">
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>
    </section>
  );
}

export default Section1;