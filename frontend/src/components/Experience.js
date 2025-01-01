import React from 'react';
import '../styles.css';

export const Experience = () => {
  const experiences = [
    {
      title: "Borda Tech - Product Manager",
      location: "İstanbul, Turkey (Intern)",
      period: "Jul 2024 - Sep 2024",
      description: "During my internship at Borda Tech, I played a crucial role in the development of an AI-powered assistant for their healthcare product, Quattro...",
    },
    {
      title: "Kodluyoruz - Associate Team Member",
      location: "İstanbul, Turkey (Full Time - Remote)",
      period: "Jul 2023 - Jul 2024",
      description: "During my tenure at Kodluyoruz, I played a key role in planning and managing free software training programs for youth...",
    },
  ];

  return (
    <div className="experience-container">
      <h2>My Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.location}</h4>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

