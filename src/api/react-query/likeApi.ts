import { axiosInstance } from "../axios";
import { getToken } from "../../utills/Auth/getTokenWithCloser";

const token = getToken();

const headers = {
  Authorization: `Bearer ${token}`,
};

export const postLikes = async (postId: string) => {
  try {
    const response = await axiosInstance.post(
      `/likes/create`,
      { postId },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};

export const deleteLikes = async (likeId: string) => {
  try {
    const response = await axiosInstance.delete(`/likes/delete`, {
      data: { id: likeId },
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
