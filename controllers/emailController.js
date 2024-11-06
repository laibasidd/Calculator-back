
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
    to: process.env.GMAIL_USER,    
    subject: `New message from ${name} via Calculator Website`,
    text: `You have received a new message from the contact form.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Message: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return res.status(200).send({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({ success: false, error: error.message });
  }
};


