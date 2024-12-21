import { create } from "zustand";

interface SortStore {
  activeSort: "latest" | "oldest";
  setActiveSort: (sort: "latest" | "oldest") => void;
}
interface SortMaintStore {
  activeSort: "latest" | "popular";
  setActiveSort: (sort: "latest" | "popular") => void;
}

export const useSortStore = create<SortStore>((set) => ({
  activeSort: "latest",
  setActiveSort: (sort) => set({ activeSort: sort }),
}));

export const useSortMainStore = create<SortMaintStore>((set) => ({
  activeSort: "latest",
  setActiveSort: (sort) => set({ activeSort: sort }),
}));
