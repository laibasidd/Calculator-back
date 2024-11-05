// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
// });

// exports.sendEmail = async (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: email,
//     subject: `Thank you for using Calculator Website`,
//     text: `Dear ${name},\n\nThank you for taking the time to provide feedback on our services. We truly appreciate your input and are constantly working to improve.\nIf you have any more thoughts or suggestions, please feel free to reach out.\n\n Your message was\n${message}\n\nThank you for contacting us!\n\nRegards,\nTeam CalculatorWebsite`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
// console.log(`Email sent: ${info.response}`);

//     return res
//       .status(200)
//       .send({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//   console.error("Error sending email:", error);
//     return res.status(500).send({ success: false, error: error.message });
//   }
// };

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Thank you for using Calculator Website`,
    text: `Dear ${name},\n\nThank you for your message:\n${message}\n\nBest regards,\nTeam CalculatorWebsite`,
  };

  try {
    // Attempt to send the email and store the response in `info`
    const info = await transporter.sendMail(mailOptions);
    
    // Log `info` or use it as needed
    console.log("Email sent:", info.response);

    // Send success response to client
    return res.status(200).send({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Send error response to client
    return res.status(500).send({ success: false, error: error.message });
  }
};


