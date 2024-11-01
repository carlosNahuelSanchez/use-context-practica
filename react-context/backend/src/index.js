import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/user.routes";

const app = express();

//Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));




app.listen(process.env.PORT, () => {
    console.log("Server Running on port", 3000);
  });