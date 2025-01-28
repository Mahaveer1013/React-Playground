import { randomBytes } from "crypto";

export function generateRandomOTP(): string { 
    const otp = randomBytes(3).toString("hex").slice(0, 6)
    return otp;
}