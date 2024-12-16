import { create } from "zustand";
import axios from "axios";

type Comment = {
  _id: string;
  comment: string;
  author: string;
  post: string;
  createdAt: string;
  updatedAt: string;
};

type CommentsState = {
  comments: Comment[]; // 댓글 목록
  fetchComments: () => Promise<void>; // 댓글 가져오기
  deleteComment: (id: string) => Promise<void>; // 댓글 삭제하기
};

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],

  // 댓글 목록 가져오기
  fetchComments: async () => {
    try {
      const response = await axios.get<Comment[]>(`${import.meta.env.VITE_API_BASE_URL}/comments`);
      set({ comments: response.data }); // 상태 업데이트
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  },

  // 댓글 삭제하기
  deleteComment: async (_id: string) => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/comments/delete`;
      await axios.delete(apiUrl);
      set((state) => ({
        comments: state.comments.filter((comment) => comment._id !== _id),
      })); // 상태에서 해당 댓글 제거
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  },
}));
