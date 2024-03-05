import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { InquiryEmail } from "@/emails/inquiry-email";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const sendInquiryEmail = async (email: string, body: string) => {
  const emailHtml = render(InquiryEmail({ body, email }));

  const mailOptions = {
    from: email,
    to: "wabtech.tech@gmail.com",
    subject: "Inquiry From Wabtech",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Inquiry Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
