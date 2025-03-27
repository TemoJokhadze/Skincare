import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Image from "./assets/ia.jpg";
import Logo from "./assets/logo.png";
import Hero from "./assets/hero.jpg";
import Group from "./assets/Group.png";
import Img1 from "./assets/foto.jpg";

function App() {
  return (
    <>
      <div className="main-cont">
        {/* <div className="head"></div> */}
        <header>
          <div className="spans">
            <span className="span-1">IA</span>
            <span className="span-2">AESTHETICS</span>
          </div>
          <img src={Group} alt="group" className="group" />
        </header>
        <main>
          <div className="devizi">
            <span className="spans1">EAT</span>
            <span className="spans2">SLEEP</span>
            <span className="spans3">SKINCARE</span>
            <span className="spans3">REPEAT</span>
          </div>
          <div className="cont1">
            <div className="spanss">
              <span className="span1">SKINCARE</span>
              <span className="span2">SPECIALIST</span>
            </div>
            <img src={Img1} alt="img1" className="img1" />
          </div>
          <div className="description">
            <span className="desc1">
              Iamze Gogidze – Certified Skincare Specialist
            </span>
            <span className="desc2">
              With extensive experience and multiple certifications in skincare,
              I am dedicated to helping clients achieve healthy, glowing skin.
            </span>
            <span>My approach combines expert knowledge with high-quality treatments
            tailored to each individual’s needs.</span>
            <span>Whether you’re looking for
              rejuvenation, hydration, or solutions for specific skin concerns,
              I provide personalized care to enhance your natural beauty.</span>
            <span className="desc3">
              Book a consultation today and discover the best version of your
              skin!
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
