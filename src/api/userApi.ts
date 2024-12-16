import { getCookie } from "../utills/Auth/getCookie";
import { axiosInstance } from "./axios"
import { jwtDecode } from "jwt-decode";


type JwtPayload = {
  user: { 
    _id: string;
    email: string;
  };
  iat: number;
};

// JWT에서 userId 추출 함수
const getUserIdFromToken = () => {
  const token = getCookie("token"); 
  if (!token) {
    throw new Error("사용자 토큰이 존재하지 않습니다.");
  }
  const decodedToken = jwtDecode<JwtPayload>(token);
  console.log('Decoded JWT:', decodedToken); // 디코딩된 토큰 확인
  return decodedToken.user._id; // 서버의 JWT 구조에 따라 키 확인
};

// 사용자 정보 불러오기
export const getUserInfo = async () => {
  try{
    const userId = getUserIdFromToken();
    console.log(userId);
    const response = await axiosInstance.get(`/users/${userId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("/users/{id} 호출 중 오류 발생:", error);
  }
};

// 사용자 정보 변경
export const updateUserInfo = async ({ fullName, email }: { fullName: string; email: string }) => {
  try{
    const response = await axiosInstance.put(`/settings/update-user`,
      {
        headers: { 'Cache-Control': 'no-cache' },
        fullName,
        email
      }
    );
    return response.data;
  } catch (error) {
    console.error("/settings/update-user 호출 중 오류 발생:", error);
  }
};

// 사용자 프로필 사진 변경
export const postUserPoto = async () => {
  try{
    const response = await axiosInstance.get(`/users/upload-photo`);
    return response.data;
  } catch (error) {
    console.error("/users/upload-photo 호출 중 오류 발생:", error);
  }
};
