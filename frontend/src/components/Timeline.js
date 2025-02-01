import React from "react";
import { motion } from "framer-motion";
import { getExperiences } from "../utils/notion";
import { useState, useEffect } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const TimelineItem = ({ date_start, date_end, title, company, location, description, position }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="period">{`${formatDate(date_start)} - ${formatDate(date_end)}`}</div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <div className="location">{location}</div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const [experiences, setExperiences] = useState([]);


  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const experiences = await getExperiences();
        setExperiences(experiences);
      } catch (error) {
        console.error("Error fetching experiences: ", error.message);
      } 
    };
    fetchExperiences();
  }, []);
  console.log(experiences);

  return (
    <div className="experience-container">
      <h2 className="hero-header">MY EXPERIENCES</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

