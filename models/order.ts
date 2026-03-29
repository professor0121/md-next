import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * ✅ TypeScript Interface
 */
export interface IOrder extends Document {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  quantity: number;
  total: number;
  product: string;
  orderId: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * ✅ Schema
 */
const OrderSchema: Schema<IOrder> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    total: {
      type: Number,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true, 
  }
);

/**
 * ✅ Prevent model overwrite (Next.js fix)
 */
const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;