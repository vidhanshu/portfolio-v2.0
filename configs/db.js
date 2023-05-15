import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((value) => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
