import express from "express";
import booksRoutes from "./routes/books.routes";
import "./database";

const app = express();

app.use("/books", booksRoutes);

export default app;
