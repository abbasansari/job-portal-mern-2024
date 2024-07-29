import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import colors from "colors";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();
config({ path: "./config/config.env" });

// database connection
mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("MongoDB connected successfully".bgGreen);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:".bgRed, error);
  });

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

export default app;
