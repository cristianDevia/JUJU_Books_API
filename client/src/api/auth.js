import axios from "axios";
import { BASE_URL } from "../../config";

export const registerUser = (user) => {
  return axios.post(`${BASE_URL}/auth/signup`, user);
};
export const loginUser = async (user) => {
  return axios
    .post(`${BASE_URL}/auth/signin`, user)
    .then((obj) => obj)
    .catch((error) => {
      return { message: error.response.data.message };
    });
};

export const verifyToken = (userToken) => {
  return axios.get(`${BASE_URL}/auth/verify`, {
    headers: {
      "x-access-token": userToken,
    },
  });
};
