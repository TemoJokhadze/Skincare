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
          <div className="cont1">
            <div className="spanss">
              <span className="span1">SKINCARE</span>
              <span className="span2">SPECIALIST</span>
            </div>
            <img src={Img1} alt="img1" className="img1" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
