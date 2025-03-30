import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { anrede, vorname, nachname, mail, tel, betreff, nachricht } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Your email provider's SMTP host
    port: process.env.SMTP_PORT, // Usually 465 (SSL) or 587 (TLS)
    secure: process.env.SMTP_PORT == 465, // True for SSL, false for TLS
    auth: {
      user: process.env.SMTP_USER, // Your email (e.g., myname@mydomain.com)
      pass: process.env.SMTP_PASS, // Email password or App Password
    },
  });

  const mailOptions = {
    from: `"${vorname} ${nachname}" <${mail}>`,
    to: "myname@mydomain.com", // Replace with your recipient email
    subject: `Kontaktformular: ${betreff}`,
    text: `
      Name: ${anrede} ${vorname} ${nachname}
      Email: ${mail}
      Telefon: ${tel}
      Nachricht:
      ${nachricht}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email sending failed", error: error.message });
  }
}
