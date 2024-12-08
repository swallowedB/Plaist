import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: "Bearer your-token-here",
    "Content-Type": "application/json",
  },
});
