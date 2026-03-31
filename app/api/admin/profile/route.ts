import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwtToken";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Authorized ✅",
    user: decoded,
  });
}