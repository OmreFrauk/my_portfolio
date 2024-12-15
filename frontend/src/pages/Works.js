import { React, useState, useEffect } from "react";
import "../styles.css";
import { WorkFrame } from "../components/WorksFrame";
import { Navigation } from "../components/Navigation";
import { getProjects } from "../utils/notion";
export const Works = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="works-page">
      <Navigation />
      <div className="works-content">
        {projects
          .filter((project) => project.tech && project.tech.length > 0) // tech özelliği varsa ve boş değilse
          .map((project) => (
            <WorkFrame key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};
