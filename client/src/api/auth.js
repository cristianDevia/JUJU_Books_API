import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const registerUser = (user) => {
  return axios.post(`${API_BASE_URL}/auth/signup`, user);
};
