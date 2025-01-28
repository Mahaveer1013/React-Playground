import { MONGODB_URI } from "../constants/constant";
import mongoose from "mongoose";

const connectDB = async () => {
  if (!MONGODB_URI) {
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);
  console.log("MongoDB connected successfully!");
};

export default connectDB;
