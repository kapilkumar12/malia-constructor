const creds = require("./credential.json");
var cors = require("cors");

// console.log(creds)

let express = require("express");
let app = express();
app.use(cors());
let nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const path = require("path");
const router = express.Router();

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "kapilkumar1491003@gmail.com",
  port: 587,
  secure: false,
  // service: 'Gmail',
  auth: {
    user: creds.auth.user,
    pass: creds.auth.pass,
  },
});

app.post("/mail", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  const mailOptions = {
    from: name,
    to: email,
    subject: subject,
    message: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "err",
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("Email Sent" + data.response);
    }
  });
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

// serve PORT running here
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
