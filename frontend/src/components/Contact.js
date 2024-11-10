import React from "react";
import "../styles.css";
import { Form } from "./FormInput";
import { Button } from "./Button";
import { Frames } from "./Frames";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="hero-content-sub  ">
        <div className="hero-header" style={{ fontSize: "3.4rem" }}>
          LET'S CONNECT
        </div>

        <div className="hero-text">
          {" "}
          <div className="text-wrapper">
            Say hello at{" "}
            <a
              style={{
                color: "white",
                textDecoration: "underline",
                textDecorationStyle: { color: "green" },
                textDecorationColor: "#D3E97A",
                textDecorationThickness: "0.1rem",
                textUnderlineOffset: "0.3rem",
              }}
              className="link"
              href={"mailto:omar48faruk@gmail.com"}
            >
              omar48faruk@gmail.com
            </a>
          </div>
          <div className="text-wrapper">
            For more info here's my{" "}
            <a
              style={{
                color: "white",
                textFont: "bold",
                textDecoration: "underline",
                textDecorationStyle: { color: "green" },
                textDecorationColor: "#D3E97A",
                textDecorationThickness: "0.1rem",
                textUnderlineOffset: "0.3rem",
              }}
              className="link"
              href={"mailto:omar48faruk@gmail.com"}
            >
              resume
            </a>
          </div>
        </div>
        <div className="action">
          <Frames />
        </div>
      </div>
      <div className="sendemail">
        <Form height="2rem" width="30rem" title="Name" type="input" />
        <Form height="2rem" width="30rem" title="Email" type="input" />
        <Form height="2rem" width="30rem" title="Subject" type="input" />
        <Form height="11rem" width="30rem" title="Message" type="text" />
        <Button text="SUBMIT" animation="0">
          {" "}
        </Button>
      </div>
    </div>
  );
};
