import { create } from "zustand";

interface State {
  searchInput: string;
}

interface Action {
  setSearchInput: (input: string) => void;
}
export const useCreateCourseStore = create<State & Action>((set) => ({
  searchInput: "",
  setSearchInput: (input) => set({ searchInput: input }),
}));
