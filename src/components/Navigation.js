import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="text-wrapper">OMER FARUK BULUT</div>
      <div className="column">
        <div className="div">
          <Link to="/works" className="link">
            Work
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
