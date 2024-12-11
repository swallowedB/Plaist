import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  accessToken: string | number | boolean | object | null | undefined;
  login: (accessToken: string | number | boolean | object | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  login: (accessToken) => set({ isLoggedIn: true, accessToken }),
  logout: () => set({ isLoggedIn: false, accessToken: null }),
}));
