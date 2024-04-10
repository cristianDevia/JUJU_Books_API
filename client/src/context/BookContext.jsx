/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  getBooksRequest,
  createBookRequest,
  deleteBookRequest,
  updateBookRequest,
} from "../api/books";

export const BookContext = createContext();

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be within an AuthProvider ");
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const userToken = localStorage.getItem("user data");

  const createBook = async (book) => {
    const res = await createBookRequest(book, userToken);
    console.log(res);
  };

  const getBooks = async () => {
    try {
      const res = await getBooksRequest();
      setBooks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await deleteBookRequest(id, userToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = async (id, data) => {
    try {
      const res = await updateBookRequest(id, data, userToken);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookContext.Provider
      value={{ books, createBook, getBooks, deleteBook, updateBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
