import React from "react";
import "../styles.css";
import { Navigation } from "../components/Navigation.js";
import bio from "../assets/bio.jpeg";
import { Button } from "../components/Button.js";

import linkedin from "../assets/bxl-linkedin.svg.svg";
import bxlGithubSvg from "../assets/bxl-github.svg.svg";

function Home() {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <Navigation />
          <div className="hero-content">
            <div className="hero-content-sub">
              <p className="hero-header">HI, I AM OMER F. BULUT.</p>
              <p className="text-wrapper">
                A Istanbul based web developer passionate about building
                accessible and user friendly websites.
              </p>
              <div className="action">
                <Button />
                <div className="frame">
                  <img
                    className="bxl-linkedin-svg"
                    alt="Bxl linkedin svg"
                    src={linkedin}
                  />
                </div>
                <div className="frame">
                  <img
                    className="bxl-github-svg"
                    alt="Bxl github svg"
                    src={bxlGithubSvg}
                  />
                </div>
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
