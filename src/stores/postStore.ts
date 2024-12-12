import { create } from "zustand";

interface TagState {
  style: string[];
  withWhom: string[];
}

interface TagAction {
  setStyle: (item: string) => void;
  deleteStyle: (item: string) => void;
  setWithWhom: (item: string) => void;
  deleteWithWhom: (item: string) => void;
}
export const usePostStore = create<TagState & TagAction>((set) => ({
  style: [],
  withWhom: [],

  // 태그 관리
  setStyle: (item: string) =>
    set((state) => ({ style: [...state.style, item] })),
  deleteStyle: (item: string) =>
    set((state) => ({ style: state.style.filter((val) => val != item) })),
  setWithWhom: (item: string) =>
    set((state) => ({ withWhom: [...state.withWhom, item] })),
  deleteWithWhom: (item: string) =>
    set((state) => ({ withWhom: state.withWhom.filter((val) => val != item) })),
}));
