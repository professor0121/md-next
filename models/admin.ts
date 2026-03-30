import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Admin Interface
 */
export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin";
  createdAt: Date;
  updatedAt: Date;

  comparePassword(password: string): Promise<boolean>;
}

/**
 * Admin Schema
 */
const AdminSchema: Schema<IAdmin> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      default: "admin",
      enum: ["admin"],
    },
  },
  {
    timestamps: true,
  }
);


/**
 * Prevent model overwrite in Next.js
 */
const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;