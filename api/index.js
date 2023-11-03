import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

import cookieParser from "cookie-parser";
dotenv.config();

// connected db with moongose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// asign to express framework
const app = express();

// listen to port
app.listen(3000, () => {
  console.log("Server is running port 3000 !!!");
});

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// use parser for auth later
app.use(cookieParser());
app.use(express.json());

// sign to route
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// acquired error when happen
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
