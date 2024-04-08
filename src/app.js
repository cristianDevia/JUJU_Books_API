import express from "express";
import booksRoutes from "./routes/books.routes";

const app = express();

app.use("/books", booksRoutes);

export default app;
