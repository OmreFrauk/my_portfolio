import React from "react";
import "../styles.css";
import { Contact as ContactComponent } from "../components/Contact";
import { Navigation } from "../components/Navigation";

export const Contact = () => {
  return (
    <div className="contactPage">
      <Navigation />
      <div className="contact-content">
        <ContactComponent />

      </div>
    </div>
  );
};
