import { getCookie } from "./getCookie";

const createTokenManager = () => {
  const TOKEN = getCookie("token");
  if (!TOKEN) {
    // alert("로그인 후 이용해 주세요.");
    return null;
  }

  return {
    getToken: () => {
      return TOKEN;
    },
  };
};

export const getToken = () => {
  const tokenManager = createTokenManager();
  return tokenManager?.getToken(); // 토큰 값을 출력
};
