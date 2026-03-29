import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order, { IOrder } from "@/models/order";

/**
 * ✅ Custom Typed Filter (NO any, NO FilterQuery)
 */
type OrderFilter = {
  product?: { $regex: string; $options: "i" };
  createdAt?: {
    $gte?: Date;
    $lte?: Date;
  };
};

/**
 * 🔥 Generate Unique Order ID
 */
async function generateOrderId(): Promise<string> {
  let orderId: string;
  let exists = true;

  while (exists) {
    orderId =
      "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const existing = await Order.findOne({ orderId });

    if (!existing) exists = false;
  }

  return orderId!;
}

/**
 * 🔥 POST /api/order
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const orderId = await generateOrderId();

    const order = await Order.create({
      ...body,
      orderId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        order,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}

/**
 * 🔥 GET /api/order
 */
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const date = searchParams.get("date");

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    // ✅ clean typed filter
    const filter: OrderFilter = {};

    // 🔍 search
    if (search) {
      filter.product = { $regex: search, $options: "i" };
    }

    // 📅 specific date
    if (date) {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);

      const end = new Date(date);
      end.setHours(23, 59, 59, 999);

      filter.createdAt = { $gte: start, $lte: end };
    }

    // 📅 range
    else if (startDate || endDate) {
      filter.createdAt = {};

      if (startDate) {
        filter.createdAt.$gte = new Date(startDate);
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        filter.createdAt.$lte = end;
      }
    }

    const orders = await Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Order.countDocuments(filter);

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: orders,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}