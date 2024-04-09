import express from "express";
import cors from "cors";
import booksRoutes from "./routes/books.routes";
import authRoutes from "./routes/auth.routes";
import "./database";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/books", booksRoutes);
app.use("/api/auth", authRoutes);

export default app;
