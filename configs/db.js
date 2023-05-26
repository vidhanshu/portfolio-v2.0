import mongoose from "mongoose";

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
