import dotenv from "dotenv";
import connectDB from "./db/dbOne.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

// //Way Two To Connect to DB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/* //Way One To Connect to DB
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
const app = express();
async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is Listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.log("ERROR", error);
    throw err;
  }
};

*/
