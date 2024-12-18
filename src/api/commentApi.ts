import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";

const token = getToken();
const headers = {
  Authorization: `Bearer ${token}`,
};

export const postComment = async ({ contentId, comment }: postCommentProps) => {
  try {
    const response = await axiosInstance.post(
      `/comments/create`,
      {
        comment,
        postId: contentId,
      } as AxiosRequestConfig,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

export const deleteComment = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/comments/delete`,{
      data: {id},
    });
    console.log(response);
  } catch(error){
    console.error("댓글 삭제 중 오류:", error);
  }
}