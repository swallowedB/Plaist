import { create } from "zustand";

interface IsLoginState {
  isLogin: boolean | null;
  toggleLoginState: () => void;
}

export const useIsLoginStore = create<IsLoginState>((set) => ({
  isLogin: null,
  setLoginState: (newState: boolean) => set({ isLogin: newState }), // 로그인 상태 설정
  toggleLoginState: () => set((state) => ({ isLogin: !state.isLogin })), // 상태 반전
}));
