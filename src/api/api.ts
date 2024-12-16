import axios from "axios";
import { axiosInstance } from "./axios";
import { setCookie } from "../utills/Auth/setCookie";
import { deleteCookie } from "../utills/Auth/deleteCookie";

// search
// 사용자 혹은 게시물을 검색합니다.
export const getSearchByUserAndPost = async (searchQuery: string) => {
  try {
    const response = await axios.get(`/search/all/${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error; // 오류를 호출자에게 전달
  }
};

// 사용자를 검색합니다.
export const getSearchByUser = async (searchQuery: string) => {
  try {
    const response = await axios.get(`/search/users/${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error; // 오류를 호출자에게 전달
  }
};

// follow
// 특정 사용자를 팔로우합니다.
export const postCreateFollow = async (userId: string) => {
  try {
    const response = await axios.post(`/follow/create`, { userId: userId });
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 특정 사용자를 언팔합니다.
export const deleteFollow = async (userId: string) => {
  try {
    const response = await axios.delete(`follow/delete`, {
      params: { userId }, // 데이터 전달 방식을 params로 변경
    });
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 새로운 사용자를 생성합니다.
export const postSingUp = async (
  email: string,
  fullName: string,
  password: string,
  navigate: NavigateFunction
) => {
  try {
    const { status, data } = await axiosInstance.post(`/signup`, {
      email,
      fullName,
      password,
    });

    if (status === 200) {
      navigate("/login");
      console.log(data);
    } else {
      console.log("failed");
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 로그인
export const postLogin = async (
  email: string,
  password: string,
  navigate: NavigateFunction,
  page: string | null
) => {
  try {
    const { status, data } = await axiosInstance.post(`/login`, {
      email,
      password,
    });
    if (status === 200) {
      setCookie("token", data.token);
      navigate(`/${page}`);
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 로그아웃
export const postLogout = async (navigate: NavigateFunction) => {
  try {
    const { status } = await axiosInstance.post(`/logout`);
    if (status === 200) {
      deleteCookie("token");
      navigate("/login?page=my-page");
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 알림창
export const getNotification = async () => {
  try {
    const response = await axios.get(`/notifications`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    return []; // 오류 시 빈 배열 반환
  }
};
