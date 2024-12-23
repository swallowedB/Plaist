import { jwtDecode } from "jwt-decode";

import { axiosInstance } from "./axios";

import { getCookie } from "../utills/Auth/getCookie";
import { useIsLoginStore } from "../stores/login/useIsLoginStore";

type JwtPayload = {
  user: {
    _id: string;
    email: string;
  };
  iat: number;
};

// JWT에서 userId 추출 함수
export const getUserIdFromToken = () => {
  const token = getCookie("token");
  if (!token) {
    console.log("로그인 상태가 아닙니다.");
    return null;
  }
  const decodedToken = jwtDecode<JwtPayload>(token);

  return decodedToken.user._id; // 서버의 JWT 구조에 따라 키 확인
};

// 사용자 정보 불러오기
export const getUserInfo = async () => {
  const { setLoginState } = useIsLoginStore.getState();
  try {
    const userId = getUserIdFromToken();
    if (userId) {
      const response = await axiosInstance.get(`/users/${userId}`, {
        headers: { "Cache-Control": "no-cache" },
      });
      setLoginState(true);
      return response.data;
    }
    setLoginState(false);
  } catch (error) {
    console.error("/users/{id} 호출 중 오류 발생:", error);
  }
};

// 사용자 정보 변경
export const updateUserInfo = async ({
  fullName,
  email,
  region,
}: {
  fullName: string;
  email: string;
  region?: string;
}) => {
  try {
    const jsonRegion = JSON.stringify({ region });

    const response = await axiosInstance.put(`/settings/update-user`, {
      headers: { "Cache-Control": "no-cache" },
      fullName,
      email,
      username: jsonRegion,
    });
    return response.data;
  } catch (error) {
    console.error("/settings/update-user 호출 중 오류 발생:", error);
    throw error;
  }
};

// 사용자 프로필 사진 변경
export const postUserPoto = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post(`/users/upload-photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { image } = response.data;
    return image;
  } catch (error) {
    console.error("/users/upload-photo 호출 중 오류 발생:", error);
    throw error;
  }
};

// ID에 따라 다른 사용자 정보를 가져옴
export const getUserById = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
