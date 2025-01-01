const axios = require("axios");
require("dotenv").config();
const express = require("express");

const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const app = express();
const cors = require("cors");
app.use(express.json());
const corsOptions = {
  origin: "https://www.omrefrauk.com.tr",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/notion/getProjects", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_PROJECTS_ID,
    });
    const properties = response.results.map((page) => page.properties);
    console.log("Properties: ", properties);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json("Error fetching data from Notion Database");
  }
});

app.post("/notion/insertMessage", async (req, res) => {
  const data = req.body;

  try {
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_MESSAGES_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: data.subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: data.message,
              },
            },
          ],
        },
      },
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_MAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/email/sendmail", (req, res) => {
  const mailOptions = {
    from: process.env.GMAIL_MAIL,
    to: process.env.GMAIL_MAIL,
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("sent");
    }
  });
});
app.listen(5000, () => console.log("Server is running on port 5000"));
