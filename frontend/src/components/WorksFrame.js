import React from "react";
import "../styles.css";

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
    React: "#61dafb33",
    Javascript: "#f7df1e33",
    Python: "#3776ab33",
    "Amazon Services": "#ff990033",
    Mongoose: "#88000033",
    // Diğer teknolojiler için renkler ekleyebilirsiniz
  };

  return (
    <div className="workFrame">
      <div className="work-photo">
        <img
          className="portrait"
          alt={project_name.title[0].plain_text}
          src={project_screenshots.files[0].file.url}
          loading="lazy"
        />
      </div>

      <div className="work-content">
        <h2 className="work-title">{project_name.title[0].plain_text}</h2>
        <p className="work-description">
          {project_description.rich_text[0].plain_text}
        </p>

        <div className="work-info">
          <div className="tech-info">
            <span className="tech-title">Year</span>
            <span className="tech-title">{project_year || "2022"}</span>
          </div>
          <div className="tech">
            <span className="tech-title">Technologies</span>
            <span className="tech-tags">
              {technologies.multi_select.map((tech) => (
                <span
                  key={tech.id}
                  className="tech-tag"
                  style={{ backgroundColor: colorMap[tech.name] || "#33333333" }}
                >
                  {tech.name}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="work-links">
          {project_url?.url && (
            <div className="link-div">
              <div className="link">
                <a href={project_url.url} target="_blank" rel="noopener noreferrer">
                  SEE ON GITHUB
                  <img src={require("../assets/github.png")} alt="github" width="20" height="20" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
