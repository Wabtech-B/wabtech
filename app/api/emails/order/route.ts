import { sendOrderEmail } from "@/lib/sendOrderEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, orderId, templateName, templatePrice, templateImage } =
      await request.json();

    console.log(email, orderId, templateName, templatePrice, templateImage);

    await sendOrderEmail(
      email,
      orderId,
      templateName,
      templatePrice,
      templateImage
    );

    return NextResponse.json("Order details have been sent to your email");
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}
