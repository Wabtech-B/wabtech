import { OrderEmail } from "@/emails/order-email";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const sendOrderEmail = async (
  email: string,
  orderId: string,
  templateName: string,
  templatePrice: string,
  templateImage: string
) => {
  const emailHtml = render(
    OrderEmail({ orderId, templateName, templatePrice, templateImage })
  );

  const mailOptions = {
    from: "wabtech.tech@gmail.com",
    to: email,
    subject: "Wabtech: Template Order Details",
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
