import { Router } from "express";
import * as booksController from "../controllers/books.controller";
const router = Router();

router.post("/", booksController.createBooks);

router.get("/", booksController.getBooks);

router.get("/:bookId", booksController.getBooksById);

router.put("/:bookId", booksController.updateBooksById);

router.delete("/:bookId", booksController.deleteBooksById);

export default router;
