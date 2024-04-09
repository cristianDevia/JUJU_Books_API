import Book from "../models/Book";

export const createBooks = async (req, res) => {
  try {
    const stateList = ["DISPONIBLE", "RESERVADO"];

    if (req && req.body) {
      const { title, author, publicationYear, state } = req.body;

      if (stateList.includes(state.toUpperCase())) {
        const newBook = new Book({
          title,
          author,
          publicationYear,
          state,
        });

        const bookSaved = await newBook.save();
        res.json(bookSaved);
      } else {
        res.status(400).json({ message: "Estado incorrecto" });
      }
    }
  } catch (error) {
    res.json(error);
  }
};

export const getBooks = async (req, res) => {
  try {
    const booksList = await Book.find();
    res.json(booksList);
  } catch (error) {
    res.json(error);
  }
};
export const getBooksById = async (req, res) => {
  try {
    const findBookById = await Book.findById(req.params.bookId);
    res.json(findBookById);
  } catch (error) {
    res.json(error);
  }
};

export const updateBooksById = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.bookId,
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedBook);
};

export const deleteBooksById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
    if (!deletedBook) return res.json({ message: "No se encuentra el libro" });

    const { title, author, publicationYear, state } = deletedBook;
    const book = {
      title,
      author,
      publicationYear,
      state,
    };
    res.json({ message: "Deleted book", book });
  } catch (error) {
    res.json(error);
  }
};
