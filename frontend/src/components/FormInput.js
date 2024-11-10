import React from "react";
import "../styles.css";

export const Form = (props) => {
  const styles = {
    backgroundColor: "#1a1a1a",
    boxShadow: "none",
    border: "none",
    color: "white",
    height: props.height || "2rem",
    width: props.width || "10rem",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    fontFamily: "Helvetica",
    resize: "none",
    fontSize: "1rem",
  };
  return (
    <div className="form">
      <label className="label">{props.title}</label>
      <div>
        {props.type === "input" ? (
          <input style={styles} />
        ) : (
          <textarea style={styles} />
        )}
      </div>
    </div>
  );
};
