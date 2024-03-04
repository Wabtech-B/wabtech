import { prisma } from "@/lib/prismadb";
import { sendEmailVerificationLink } from "@/lib/sendEmailVerificationLink";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: await bcrypt.hash(password, 10),
      },
    });

    await sendEmailVerificationLink(user.email as string);

    return NextResponse.json("A verification link was sent to your email");
  } catch (error) {
    console.error(error);
    return new NextResponse("Server error", { status: 500 });
  }
}
