import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="works-header"
      >
        <h1>My Works</h1>
        <p>A collection of my recent projects and collaborations</p>
      </motion.div>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <motion.div 
          className="works-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.filter(
            (project) =>
              project.project_name.title[0] &&
              project.project_name.title.length > 0).map((project) => (
            <motion.div
              key={project.id.number}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <WorkFrame project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
