import React from "react";
import { motion } from "framer-motion";
import { getExperiences } from "../utils/notion";
import { useState, useEffect } from "react";

// Improved date formatting with error handling
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric',
      timeZone: 'UTC' // Add if dates come from UTC source
    });
  } catch (e) {
    console.error("Invalid date format:", dateString);
    return "Present";
  }
};

// Memoized TimelineItem to prevent unnecessary re-renders
const TimelineItem = React.memo(({ 
  date_start, 
  date_end, 
  title, 
  company, 
  location, 
  description, 
  index 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`timeline-item ${isEven ? 'timeline-right' : 'timeline-left'}`}
      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        bounce: 0.25
      }}
    >
      <div className="timeline-dot" aria-hidden="true" />
      <article className="timeline-content">
        <time className="timeline-period">
          {`${formatDate(date_start)} - ${formatDate(date_end)}`}
        </time>
        <header className="timeline-header">
          <h3 className="timeline-title">{title}</h3>
          <div className="timeline-subheader">
            <span className="timeline-company">{company}</span>
            {location && (
              <span className="timeline-location">{location}</span>
            )}
          </div>
        </header>
        <div className="timeline-description">
          {description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </article>
    </motion.div>
  );
});

export const Timeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences();
        // Sort experiences by date in descending order
        const sorted = data.sort((a, b) => 
          new Date(b.date_start) - new Date(a.date_start)
        );
        setExperiences(sorted);
      } catch (error) {
        setError("Failed to load experiences. Please try again later.");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchExperiences();
  }, []);

  if (error) {
    return (
      <div className="experience-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        PROFESSIONAL JOURNEY
      </motion.h2>

      {loading ? (
        <div className="loading-indicator">Loading experiences...</div>
      ) : (
        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={exp.id || index} // Prefer unique ID from data if available
              index={index}
              {...exp}
            />
          ))}
        </div>
      )}
    </div>
  );
};