import { axiosInstance } from "../axios";

export const getCourses = async (contentId: string) => {
  console.log("여기야!", contentId);
  try {
    const response = await axiosInstance.get(`/posts/${contentId}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
