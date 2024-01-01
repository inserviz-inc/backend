const nodemailer = require("nodemailer");
require("dotenv");

const sendMail = (email, subject, mailBody) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      secure: true,
      tls: {
        servername: "gmail.com",
      },
    });

    const mailOptions = {
      from: "'Inserviz Inc' inservizinc@gmail.com",
      to: email,
      subject: subject,
      html: mailBody,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
      }
      resolve("ok");
    });
  });

module.exports = sendMail;
