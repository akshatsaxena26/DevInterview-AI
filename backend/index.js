

import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 

import userRoutes from "./routes/auth-route.js";


mongoose.connect("mongodb://127.0.0.1:27017/project2")
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.log("DB Error ", err);
});

let app = express(); 

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.urlencoded({ extended: true }));// this 
app.use(express.json());

app.use("/api/auth", userRoutes); 


app.listen(9001, () => {
  console.log("Server Started.....");
});

