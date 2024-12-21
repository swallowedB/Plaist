import { getCookie } from "../utills/Auth/getCookie";

export const useCookie = () => {
  if (getCookie("token")) return true;
  return false;
};
