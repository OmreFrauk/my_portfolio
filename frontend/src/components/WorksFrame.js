import React from "react";
import "../styles.css";
import bio from "../assets/image.png";
export const WorkFrame = ({
  project: {
    project_name,
    project_description,
    project_year,
    technologies,
    project_url,
    project_screenshots,
  },
}) => {
  const colorMap = {
    React: "#28456c",
    Javascript: "#493064",
    Python: "#3776ab",
    "Amazon Services": "#603b2d",
    Mongoose: "#69314c",
  };
  console.log("github", project_url.url);
  return (
    <div className="workFrame">
      {/* Image Section */}
      <div className="work-photo">
        <img
          className="portrait"
          alt="Portrait"
          src={project_screenshots.files[0].file.url}
        />
      </div>

      {/* Content Section */}
      <div className="work-content">
        {/* Title */}
        <div className="work-title">{project_name.title[0].plain_text}</div>

        {/* Description */}
        <div className="work-description">
          {project_description.rich_text[0].plain_text}
        </div>

        {/* Project Info */}
        <div className="work-info">
          <div>
            <span>Year</span>
            <span>2022</span>
          </div>
          <div className="tech">
            <span>Technologies</span>
            <div className="tech-tags">
              {technologies.multi_select.map((techItem) => {
                const tagColor = colorMap[techItem.name] || "#333";
                return (
                  <span
                    key={techItem.id}
                    className="tech-tag"
                    style={{ backgroundColor: tagColor }}
                  >
                    {techItem.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="work-links">
          <div className="link-div">
            <div className="link">
              <a href="#live-demo" target="_blank" rel="noopener noreferrer">
                LIVE DEMO
              </a>
              <img src={require("../assets/ra.png")} alt="arrow" />
            </div>
            <div
              className="line"
              style={{ background: "#d3e879", opacity: "100%" }}
            ></div>
          </div>
          <div className="link-div">
            <div className="link">
              <a
                href={project_url.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                SEE ON GITHUB
              </a>
              <img src={require("../assets/github.png")} alt="github" />
            </div>
            <div
              className="line"
              style={{ background: "#d3e879", opacity: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
