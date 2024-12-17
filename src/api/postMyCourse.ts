import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";

interface PostMyCourseProps {
  title: string;
  image: string;
  channelId: string;
}

export const postMyCourse = async ({
  title,
  image,
  channelId,
}: PostMyCourseProps) => {
  const token = getToken(); 

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axiosInstance.post(
      `/posts/create`, 
      {
        title,
        image,
        channelId,
      } as AxiosRequestConfig, 
      { headers } 
    );

    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error; 
  }
};
