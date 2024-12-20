import axios from "axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";
export const axiosInstance = axios.create({
  baseURL: "https://5th.fe.dev-cos.com:5002",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const tokenObj = getToken();
  if (tokenObj) {
    const token = JSON.parse(tokenObj).token;
    console.log(token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});
