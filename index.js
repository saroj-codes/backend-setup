import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./src/db/index.js";

dotenv.config();
ConnectDB();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Application is listening at Port:${process.env.PORT}`);
});
