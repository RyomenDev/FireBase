// frontend/src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const verifyToken = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/verifyToken`, { token });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Something went wrong");
  }
};
