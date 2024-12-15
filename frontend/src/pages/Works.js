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
          .filter(
            (project) =>
              project.project_name.title[0] &&
              project.project_name.title.length > 0
          ) //
          .map((project) => (
            <WorkFrame key={project.id.number} project={project} />
          ))}
      </div>
    </div>
  );
};
