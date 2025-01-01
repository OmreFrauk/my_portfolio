import { Button } from "../components/Button";
import { Frames } from "../components/Frames";
import { Navigation } from "../components/Navigation";
import bio from "../assets/bio.jpeg";
import { Contact } from "../components/Contact";

export const AboutMe = () => {
  return (
    <div className="aboutmePage">
      <Navigation />
      <div className="about">
        <div className="content">
          <div className="hero-content">
            <div className="hero-header">ABOUT ME</div>
            <div className="hero-content-sub">
              <div className="aboutme">
                <div className="text-wrapper">
                  <h3 style={{ fontSize: "1.7rem" }}>
                    HI, I AM OMER F. BULUT.
                  </h3>
                  <p className="text-wrapper">
                    I am a web developer based in Istanbul, Turkey. I have a
                    passion for web development and love to create user-friendly
                    websites. I have experience in HTML, CSS, JavaScript, React,
                    and Node.js.
                  </p>
                </div>
                <div className="action">
                  <Button text="DOWNLOAD RESUME"></Button>
                  <Frames />
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "center" }} className="hero-image">
            {" "}
            <img
              className="portrait"
              alt="Portrait"
              src={bio}
              style={{ borderRadius: "70%" }}
            />
          </div>
          <div className="hero-content">
            <div className="hero-header" style={{ fontSize: "3.2rem" }}>
              CAPABILITIES
            </div>
            <div className="hero-content-sub">
              <div className="aboutme">
                <div className="text-wrapper">
                  <h3>HI, I AM OMER F. BULUT.</h3>
                  <p>
                    I am a web developer based in Istanbul, Turkey. I have a
                    passion for web development and love to create user-friendly
                    websites. I have experience in HTML, CSS, JavaScript, React,
                    and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="hero-content">
            <div className="hero-header" style={{ fontSize: "3.2rem" }}>
              MY EXPERIENCES
            </div>
            <div className="hero-content-sub">
              <div className="aboutme">
                <div className="text-wrapper">
                  <p style={{ fontSize: "1.2rem" }}>HI, I AM OMER F. BULUT.</p>
                  <p>
                    I am a web developer based in Istanbul, Turkey. I have a
                    passion for web development and love to create user-friendly
                    websites. I have experience in HTML, CSS, JavaScript, React,
                    and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
         
        </div>
      </div>
    </div>
  );
};
