import { createOrder } from "@/lib/paypal";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { product } = await request.json();

    const { jsonResponse, httpStatusCode } = await createOrder(product);

    return NextResponse.json(jsonResponse, {
      status: httpStatusCode,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Server error", { status: 500 });
  }
}
