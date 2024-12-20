import axios from "axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";
export const axiosInstance = axios.create({
  baseURL: "https://5th.fe.dev-cos.com:5002",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  
  if (token) {
    if(token.includes("{")){
      const { token: accessToken } = JSON.parse(token);
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});