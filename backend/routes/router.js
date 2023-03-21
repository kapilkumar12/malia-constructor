const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kapilkumar1492003@gmail.com",
        pass: "gtixeqswtlkobwos",
      },
    });

    var mailOptions = {
      from: "kapilkumar1492003@gmail.com",
      to: email,
      subject: subject,
      message: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(false);
      } else {
        console.log("Email sent: " + info.response);
        resolve(true);
      }
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});
module.exports = router;
