import { Router } from "express";
import * as booksController from "../controllers/books.controller";
import { verifyToken } from "../middlewares/authJWT";
const router = Router();

router.post("/", verifyToken, booksController.createBooks);

router.get("/", booksController.getBooks);

router.get("/:bookId", booksController.getBooksById);

router.put("/:bookId", verifyToken, booksController.updateBooksById);

router.delete("/:bookId", verifyToken, booksController.deleteBooksById);

export default router;
