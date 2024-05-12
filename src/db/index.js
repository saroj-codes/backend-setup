import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";
const ConnectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Error:", error);
    process.exit(1);
  }
};
export default ConnectDB;
