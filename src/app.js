import express from "express";
import booksRoutes from "./routes/books.routes";
import authRoutes from "./routes/auth.routes";
import "./database";

const app = express();
app.use(express.json());

app.use("/api/books", booksRoutes);
app.use("/api/auth", authRoutes);

export default app;
