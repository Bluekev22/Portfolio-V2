const express = require("express");
const router = express.Router();
const path = require("path");
const http = require("http");
const enforce = require("express-sslify");
const cors = require("cors");
const nodemailer = require("nodemailer");
//localhost
//require('dotenv').config()
//production
require("dotenv").config({
  path: path.resolve(process.cwd(), "client", ".env.development"),
  debug: true,
});

const PORT = process.env.PORT || 3001;
const PASSWORD = process.env.REACT_APP_PASSWORD;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "us2.smtp.mailhostbox.com",
    port: 587,
    secure: false,
    auth: {
      user: "kevin@kevinshank.tech",
      pass: PASSWORD,
    },
    tls: {
      minVersion: "TLSv1", // -> This is the line that solved my problem
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "kevin@kevinshank.tech",
    to: "kevin@kevinshank.tech",
    subject: `Message from ${req.body.email}: ${req.body.firstName} ${req.body.lastName}`,
    text: `${req.body.phone} ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});
//hello
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
