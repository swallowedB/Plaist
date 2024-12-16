import { getCookie } from "./getCookie";

const createTokenManager = () => {
  const TOKEN = getCookie("token");

  return {
    getToken: () => {
      return TOKEN;
    },
  };
};

export const getToken = () => {
  const tokenManager = createTokenManager();
  return tokenManager.getToken(); // 토큰 값을 출력
};
