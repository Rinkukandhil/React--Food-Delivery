import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const uri = "mongodb://0.0.0.0:27017/";
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("ERROR: ", err);
  } finally {
  }
};
export default connectToMongoDB;
