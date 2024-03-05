import { sendInquiryEmail } from "@/lib/sendInquiryEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, body } = await request.json();

    await sendInquiryEmail(email, body);

    return NextResponse.json(
      "We've received your inquiry and will get back to you soon!"
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
