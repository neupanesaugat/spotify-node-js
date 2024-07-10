import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(
      `mongodb+srv://saugatneupane50:${encodeURIComponent(
        "saugatneupane50"
      )}@cluster0.oppoqsr.mongodb.net/spotify-api?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established!");
  } catch (error) {
    console.log("DB connection failed!");
    console.log(error.message);
  }
};

export default connectDB;
