import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { ContactEmail } from "@/emails/contact-email";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (
  email: string,
  subject: string,
  body: string
) => {
  const emailHtml = render(ContactEmail({ body, subject, email }));

  const mailOptions = {
    from: email,
    to: "wabtech.tech@gmail.com",
    subject,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Contact Email sent successfully");
  } catch (error) {
    console.error("Error email:", error);
    throw error;
  }
};
