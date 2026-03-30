import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin";
import { hashPassword } from "@/utils/hassPassword";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password, secret } = await req.json();

    // 🔐 Check secret key
    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // ❗ Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin already exists" },
        { status: 400 }
      );
    }

    // ✅ FIXED (added await)
    const hassedPassword = await hashPassword(password);

    // ✅ Create admin
    const admin = await Admin.create({
      name,
      email,
      password: hassedPassword,
    });

    return NextResponse.json(
      {
        message: "Admin created successfully",
        admin: {
          id: admin._id,
          email: admin.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}