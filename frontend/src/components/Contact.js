import React, { useState } from "react";
import "../styles.css";
import { Form } from "./FormInput";
import { Button } from "./Button";
import { Frames } from "./Frames";
import { insertMessage, sendemail, downloadCv } from "../utils/notion";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(data);
    insertMessage(data);
    sendemail(data);
  };
  const handleDownload = async () => {
    try {
      await downloadCv();
    } catch (error) {
      console.error("Error downloading CV: ", error.message);
    }
  };

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
            <div
              style={{
                color: "white",
                textFont: "bold",
                textDecoration: "underline",
                textDecorationStyle: { color: "green" },
                textDecorationColor: "#D3E97A",
                textDecorationThickness: "0.1rem",
                textUnderlineOffset: "0.3rem",
                cursor: "pointer",
              }}
              className="link"
              onClick={handleDownload}
            >
              resume
            </div>
          </div>
        </div>
        <div className="action">
          <Frames />
        </div>
      </div>
      <div className="sendemail">
        <Form
          height="2rem"
          width="30rem"
          title="Name"
          type="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form
          height="2rem"
          width="30rem"
          title="Email"
          type="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form
          height="2rem"
          width="30rem"
          title="Subject"
          type="input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Form
          height="11rem"
          width="30rem"
          title="Message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button text="SUBMIT" animation="0" onClick={handleClick}>
          {" "}
        </Button>
      </div>
    </div>
  );
};
