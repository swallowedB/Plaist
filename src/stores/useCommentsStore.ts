import { create } from "zustand";
import { deleteCommentApi, fetchCommentsApi } from "../api/commentApi";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
};


type CommentsState = {
  comments: Comment[];
  fetchComments: () => Promise<void>;
  deleteComments: () => Promise<void>;
};

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],

  // 댓글 목록 가져오기
  fetchComments: async () => {
    try {
      const comments = await fetchCommentsApi();
      set({ comments });
    } catch (error) {
      console.error("Error fetching comments in store:", error);
    }
  },

   // 댓글 삭제
   deleteComments: async (id) => {
    try {
      await deleteCommentApi (id);
      set((state) => ({
        comments: state.comments.filter((comment) => comment.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting comment in store:", error);
    }
  },
}));