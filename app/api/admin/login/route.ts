import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin";
import { comparePassword } from "@/utils/hassPassword";
import { signToken } from "@/utils/jwtToken";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // ✅ Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ Find admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid email" },
        { status: 400 }
      );
    }

    // ✅ Compare password
    const isMatch = await comparePassword(password, admin.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    // 🔐 Generate JWT token
    const token = await signToken(admin.email as string);

    // 🍪 Create response
    const response = NextResponse.json(
      {
        message: "Login successful",
        admin: {
          id: admin._id,
          email: admin.email,
        },
      },
      { status: 200 }
    );

    // ✅ Set cookie
    response.cookies.set("token", token, {
      httpOnly: true, // 🔐 not accessible via JS
      secure: process.env.NODE_ENV === "production", // only https in prod
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}