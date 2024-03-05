import { sendContactEmail } from "@/lib/sendContactEmail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, subject, body } = await request.json();

    await sendContactEmail(email, subject, body);

    return NextResponse.json(
      "We've received your message and will get back to you soon!"
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
