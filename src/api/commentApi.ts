import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";
import { getToken } from "../utills/Auth/getTokenWithCloser";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
};

interface postCommentProps {
  contentId: string;
  comment: Comment[];
}

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

// 댓글 가져오기
export const fetchCommentsApi = async () => {
  try {
    const response = await axiosInstance.get(`/comments`, { headers });
    console.log("Fetched comments:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// 댓글 삭제하기
export const deleteCommentApi = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/comments/delete`,{
      data: {id},
    });
    console.log(`Deleted comment ID: ${id}`);
    return response;
  } catch(error){
    console.error("댓글 삭제 중 오류:", error);
    throw error;
  }
}