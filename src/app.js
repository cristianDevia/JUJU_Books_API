import express from "express";
import booksRoutes from "./routes/books.routes";
import "./database";

const app = express();
app.use(express.json());
app.use("/books", booksRoutes);

export default app;
