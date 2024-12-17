import { create } from "zustand";

interface CommentsState {
  comments: Comment[];
  setComments: (data: Comment[]) => void;
}

export const useCommentStore = create<CommentsState>((set) => ({
  comments: [],
  setComments: (data) => set({ comments: data }),
}));
