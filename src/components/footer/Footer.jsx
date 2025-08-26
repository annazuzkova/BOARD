import React from "react";
import logo from ".././header/Frame.svg";
import logo1 from "./twitch.png";
import logo2 from "./roblox.png";
import logo3 from "./asus.png";
import logo4 from "./canon.png";
import logo5 from "./microsoft.png";

import twitter from "./icon/twitter.png";
import facebook from "./icon/facebook.png";
import cat from "./icon/cat.png";
import inst from "./icon/inst.png";

import "./Footer.css"

function Footer(){
    return(
        <>
         <div className="marquee-wrapper-footer">
    <div className="marquee">
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
      <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
       <span className="glow">GAMING SPANING ✦ ACTION - PACKED ✦ MIND - BENDING ✦ COLLECTION OG GAMES ✦</span>
    </div>
  </div>
        <footer className="footer">
            <div className="main-contant">
                <div className="div1">
                     <div className="logo">
                              <img src={logo} alt="logo" className="logo-icon" />
                              <span className="logo-text">board</span>
                            </div>
                      <p>A well-designed gaming header often incorporates
                        elements such as game characters, iconic symbols, 
                        vibrant colors, and dynamic visuals .</p>      
                </div>
                <div className="div2">
                    <p className="main-logo-text">COMPANY</p>
                    <a href="#product">Products</a>
                    <a href="#app">Apps & Games</a>
                    <a href="#features" >Features</a>
                </div>
                <div className="div3">
                    <p className="main-logo-text">HELP</p>
                    <a href="#support">Support</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact Us</a>
                </div>
                <div className="div4">
                    <p className="main-logo-text">RESOURCES</p>
                    <a href="#youtube">Youtube Playlist</a>
                    <a href="#blog">How To - Blog</a>
                    <a href="#terms">Terms & Conditions</a>
                </div>
            </div>
            <div className="name-company">
                 <img src={logo1} alt="company" />
                 <img src={logo2} alt="company" />
                 <img src={logo3} alt="company" />
                 <img src={logo4} alt="company" />
                 <img src={logo5} alt="company" /> 
            </div>
             <div className="footer-bottom">
          <div className="socials">
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={inst} alt="Instagram" />
            <img src={cat} alt="Pinterest" />
          </div>
          <p className="rights">© Copyright 2023, All Rights Reserved by board</p>
        </div>
        </footer>
        </>
    )
}

export default Footer