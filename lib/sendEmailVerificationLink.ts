import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { EmailVerification } from "@/emails/email-verification";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

const url =
  process.env.NODE_ENV === "production"
    ? "https://sleek-templates.vercel.app"
    : "http://localhost:3000";

export const sendEmailVerificationLink = async (email: string) => {
  const resetLink = `${url}/verify?email=${email}`;
  const emailHtml = render(EmailVerification({ url: resetLink }));

  const mailOptions = {
    from: "wabtech.tech@gmail.com",
    to: email,
    subject: "Email Verification",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification link sent successfully");
  } catch (error) {
    console.error("Error sending verification link:", error);
    throw error;
  }
};
