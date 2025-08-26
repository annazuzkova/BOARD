import scss from "./Title.module.scss";
 import React, { useEffect, useRef, useState } from "react";
 
 export default function Title({ children }) {
 const [width, setWidth] = useState(300);
 const wrapRef = useRef(null);
 const titleRef = useRef(null);
 
 useEffect(() => {
 function updateWidth() {
if (window.innerWidth >= 1200) {
  setWidth(340);
} else if (window.innerWidth >= 768) {
  setWidth(270);
} else {
  setWidth(300);
}}

 
 function updateOverflow() {
 const titleContainer = wrapRef.current;
 const title = titleRef.current;
 if (!titleContainer || !title) return;
 
 const overflowPx = title.scrollWidth - titleContainer.clientWidth;
 if (overflowPx > 1) {
 titleContainer.classList.add("is-overflow");
 titleContainer.style.setProperty("--overflow", overflowPx + "px");
 const pxPerSec = 60;
 titleContainer.style.setProperty(
 "--duration",
 overflowPx / pxPerSec + "s"
 );
 } else {
 titleContainer.classList.remove("is-overflow");
 titleContainer.style.removeProperty("--overflow");
 titleContainer.style.removeProperty("--duration");
 }
 }
 
 function handleResize() {
 updateWidth();
 updateOverflow();
 }
 
 updateWidth();
 updateOverflow();
 
 window.addEventListener("resize", handleResize);
 return () => window.removeEventListener("resize", handleResize);
 }, [children]);
 
 return (
 <div
 ref={wrapRef}
 style={{ width, overflow: "hidden", whiteSpace: "nowrap" }}
 className={scss.game}
 >
 <h3 ref={titleRef} className={scss.game__title}>
 {children}
 </h3>
 </div>
 );
 }