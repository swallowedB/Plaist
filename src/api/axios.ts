import axios from "axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";
const token = getToken();
export const axiosInstance = axios.create({
  baseURL: "https://5th.fe.dev-cos.com:5002",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    const { token: accessToken } = JSON.parse(token);
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
