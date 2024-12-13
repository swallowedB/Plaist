import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://5th.fe.dev-cos.com:5002",
  headers: {
    Authorization: "Bearer your-token-here",
    "Content-Type": "application/json",
  },
});
