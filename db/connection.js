import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGODB_URL);
     console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDb:", error);
    process.exit(1);
  }
};

// const uri = process.env.MONGODB_URL;
// const connection = mongoose.connection;

// mongoose
//   .connect(uri)
//   .then(console.log("Connected successfully to MongoDB!"))
//   .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

  export default connectDB;