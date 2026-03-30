import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

/**
 * ✅ Create Token
 */
export const signToken = async (email: string) => {
  return jwt.sign(
    { email },            // payload
    JWT_SECRET,           // secret
    { expiresIn: "7d" }   // expiry
  );
};

/**
 * ✅ Verify Token
 */
export const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    return decoded; // { email }
  } catch (error) {
    return null;
  }
};