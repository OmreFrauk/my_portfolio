import { Button } from "../components/Button";
import { Frames } from "../components/Frames";
import { Navigation } from "../components/Navigation";
import bio from "../assets/bio.jpeg";
import { Timeline } from "../components/Timeline";
import { downloadCv } from "../utils/notion";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Git", "Tailwind", "Bootstrap", "Express", "PostgreSQL", "Python",
   "Firebase", "MongoDB",
];

export const AboutMe = () => {
  const handleDownload = async () => {
    console.log("Downloading CV..."); 
    try {
      await downloadCv();
    } catch (error) {
      console.error("Error downloading CV: ", error.message);
    }
  };
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
                  <Button text="DOWNLOAD RESUME" onClick={handleDownload}></Button>
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
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="line" />
        
                  <Timeline />
          
          <div className="line" />
         
        </div>
      </div>
    </div>
  );
};
