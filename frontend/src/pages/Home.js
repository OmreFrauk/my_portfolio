import React, { useState, useEffect } from "react";
import "../styles.css";
import { Navigation } from "../components/Navigation.jsx";
import bio from "../assets/bio.jpeg";
import { Button } from "../components/Button.js";
import { Frames } from "../components/Frames.js";
import { downloadCv } from "../utils/notion";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = " HI, I AM OMER F. BULUT.";
  const handleDownload = async () => {
    try {
      await downloadCv();
    } catch (error) {
      console.error("Error downloading CV: ", error.message);
    }
  };
  useEffect(() => {
    // Sayfa yüklendiğinde animasyon için
    setIsVisible(true);
    
    // Yazı yazma animasyonu
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="div">
        <div className={`overlap ${isVisible ? 'fade-in' : ''}`}>
          <Navigation />
          <div className="hero-content">
            <div className="hero-content-sub">
              <div className="hero-header">{typedText}</div>
              <p className="text-wrapper hover-effect">
                A Istanbul based web developer passionate about building
                accessible and user friendly websites.
              </p>
              <div className="action">
                <Button text="CONTACT ME" animation="1" onClick={() => window.location.href = '/contact'} />
                <Button text="DOWNLOAD CV" animation="2" onClick={handleDownload} />
                <Frames />
              </div>
            </div>
            <div className="hero-image">
              <img 
                className="portrait hover-zoom" 
                alt="Portrait" 
                src={bio}
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Home };
