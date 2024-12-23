import { create } from "zustand";

interface CommentsState {
  comments: reply[];
  setComments: (data: reply[]) => void;
}

export const useCommentStore = create<CommentsState>((set) => ({
  comments: [],
  setComments: (data) => set({ comments: data }),
}));
