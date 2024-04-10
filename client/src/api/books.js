import axios from "axios";
import { BASE_URL } from "../../config";

export const getBooksRequest = () => {
  return axios.get(`${BASE_URL}/books`);
};

export const createBookRequest = (bookData, userToken) => {
  return axios.post(`${BASE_URL}/books`, bookData, {
    headers: {
      "x-access-token": userToken,
    },
  });
};

export const updateBookRequest = (id, bookData, userToken) => {
  return axios.put(`${BASE_URL}/books/${id}`, bookData, {
    headers: {
      "x-access-token": userToken,
    },
  });
};

export const deleteBookRequest = (bookId, userToken) => {
  return axios.delete(`${BASE_URL}/books/${bookId}`, {
    headers: {
      "x-access-token": userToken,
    },
  });
};
