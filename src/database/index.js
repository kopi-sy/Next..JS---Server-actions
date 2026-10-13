import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  const url =
    process.env.MONGODB_URI ||
    "mongodb+srv://sangammukherjee2022:sangam2024@cluster0.xmyzton.mongodb.net/";

  try {
    const db = await mongoose.connect(url, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("Database connection is successful");
  } catch (e) {
    console.log("Database connection error:", e?.message || e);
  }
};

export default connectToDB;
