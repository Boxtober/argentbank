import axios from "axios";
import { BASE_URL } from "./config";

const getConfig = (token) => {
  return token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
};

// export const signup = async (userData) => {
//   return axios.post(`${BASE_URL}/signup`, userData);
// };

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);

  if (response.data.token) {
    //si existe, on le stocke en localStorage
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const getProfile = async (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }

  const config = getConfig(token);
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/user/profile`,
      {},
      config
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (updatedData, token) => {
  const config = getConfig(token);
  return axios.put(`${BASE_URL}/profile`, updatedData, config);
};

// export const logout = () => {
//   return {
//     type: "LOGOUT",
//   };
// };
