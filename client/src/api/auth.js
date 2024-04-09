import axios from "axios";
import { BASE_URL } from "../../config";

export const registerUser = (user) => {
  return axios.post(`${BASE_URL}/auth/signup`, user);
};
