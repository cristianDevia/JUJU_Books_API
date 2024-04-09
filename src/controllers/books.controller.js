import Book from "../models/Book";

export const createBooks = async (req, res) => {
  try {
    if (req && req.body) {
      const { title, author, publicationYear, state } = req.body;
      const newBook = new Book({
        title,
        author,
        publicationYear,
        state,
      });

      const bookSaved = await newBook.save();
      res.json(bookSaved);
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
    res.json(deletedBook);
  } catch (error) {
    res.json(error);
  }
};
