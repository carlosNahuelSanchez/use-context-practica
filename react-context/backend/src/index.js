import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/user.routes.js";

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

app.use(router)



app.listen(3000, () => {
    console.log("Server Running on port", 3000);
  });