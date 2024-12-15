import React from "react";
import "../styles.css";

export const Form = ({ height, width, title, type, value, onChange }) => {
  const styles = {
    backgroundColor: "#1a1a1a",
    boxShadow: "none",
    border: "none",
    color: "white",
    height: height || "2rem",
    width: width || "10rem",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    fontFamily: "Helvetica",
    resize: "none",
    fontSize: "1rem",
  };
  return (
    <div className="form">
      <label className="label">{title}</label>
      <div>
        {type === "input" ? (
          <input style={styles} value={value} onChange={onChange} />
        ) : (
          <textarea style={styles} value={value} onChange={onChange} />
        )}
      </div>
    </div>
  );
};
