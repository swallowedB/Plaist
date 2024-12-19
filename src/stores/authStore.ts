import { create } from "zustand";

type AuthStoreType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (cookieValue: boolean) => void;
};
export const useAuthStore = create<AuthStoreType>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (cookieValue) => set({ isLoggedIn: cookieValue }),
}));
