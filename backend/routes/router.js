const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kapilkumar1492003@gmail.com",
        pass: "gtixeqswtlkobwos",
      },
    });

    const msg = `Name: ${name} \n Email: ${email} \n Subject: ${subject} \n Message: ${message}`;

    var mailOptions = {
      from: "kapilkumar1492003@gmail.com",
      to: "kapilkumar1492003@gmail.com",
      subject: subject,
      text: `message${message} \n \n  \n \n \n \n \n \n  ${email} \n`,
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
    return res.send("email sent Successfully");
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});
module.exports = router;
