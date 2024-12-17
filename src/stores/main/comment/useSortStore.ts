import { create } from "zustand";

interface SortStore {
  activeSort: "latest" | "oldest";
  setActiveSort: (sort: "latest" | "oldest") => void;
}

export const useSortStore = create<SortStore>((set) => ({
  activeSort: "latest",
  setActiveSort: (sort) => set({ activeSort: sort }),
}));
