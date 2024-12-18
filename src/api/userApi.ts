import { getCookie } from "../utills/Auth/getCookie";
import { axiosInstance } from "./axios";
import { jwtDecode } from "jwt-decode";

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
    throw new Error("사용자 토큰이 존재하지 않습니다.");
  }
  const decodedToken = jwtDecode<JwtPayload>(token);
  return decodedToken.user._id; // 서버의 JWT 구조에 따라 키 확인
};

// 사용자 정보 불러오기
export const getUserInfo = async () => {
  try {
    const userId = getUserIdFromToken();
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
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
    const jsonRegion = JSON.stringify({region})
    console.log("Updating user info with:", { fullName, email, jsonRegion });

    const response = await axiosInstance.put(`/settings/update-user`, {
      headers: { "Cache-Control": "no-cache" },
      fullName,
      email,
      username: jsonRegion,
    });
    
    return response.data;
  } catch (error) {
    console.error("/settings/update-user 호출 중 오류 발생:", error);
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
    console.log("업로드된 이미지 URL Check:", image);
    return image;
  } catch (error) {
    console.error("/users/upload-photo 호출 중 오류 발생:", error);
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
