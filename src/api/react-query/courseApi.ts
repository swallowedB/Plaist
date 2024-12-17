import { axiosInstance } from "../axios";

export const getCourses = async (contentId: string) => {
  try {
    const response = await axiosInstance.get(`/posts/${contentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
