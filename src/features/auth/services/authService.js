
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const registerUser = async (data) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/register`,
    data
  );

  return response.data;
};
export const loginUser = async (data) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/login`,
    data
  );

  return response.data;
};

