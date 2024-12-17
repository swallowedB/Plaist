import { create } from "zustand";

interface IsLikedState {
  isLiked: boolean;
  setIsLiked: (data: boolean) => void;
  toggleIsLiked: () => void;
}

export const useIsLikedStore = create<IsLikedState>((set) => ({
  isLiked: false,
  setIsLiked: (data) => set({ isLiked: data }),
  toggleIsLiked: () => set((state) => ({ isLiked: !state.isLiked })),
}));
