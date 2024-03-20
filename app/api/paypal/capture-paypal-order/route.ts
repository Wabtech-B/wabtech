import { captureOrder } from "@/lib/paypal";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { jsonResponse, httpStatusCode } = await captureOrder(data.orderID);

    return NextResponse.json(jsonResponse, {
      status: httpStatusCode,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Server error", { status: 500 });
  }
}
