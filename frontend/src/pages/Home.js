import React from "react";
import "../styles.css";
import { Navigation } from "../components/Navigation.js";
import bio from "../assets/bio.jpeg";
import { Button } from "../components/Button.js";
import { Frames } from "../components/Frames.js";

function Home() {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <Navigation />
          <div className="hero-content">
            <div className="hero-content-sub">
              <div className="hero-header">HI, I AM OMER F. BULUT.</div>
              <p className="text-wrapper">
                A Istanbul based web developer passionate about building
                accessible and user friendly websites.
              </p>
              <div className="action">
                <Button text="CONTACT ME" animation="1" />
                <Frames />
              </div>
            </div>
            <div className="hero-image">
              <img className="portrait" alt="Portrait" src={bio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Home };
