import { axiosInstance } from "./axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";

interface PostMyCourseProps {
  title: string;
  image: File | undefined;
  channelId: string;
}

const token = getToken();

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "multipart/form-data", // 명시적으로 Content-Type을 설정
};

export const postMyCourse = async ({
  title,
  image,
  channelId,
}: PostMyCourseProps) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image || "");
    formData.append("channelId", channelId);

    const response = await axiosInstance.post("/posts/create", formData, {
      headers,
    });

    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
