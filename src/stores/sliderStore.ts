import { create } from "zustand";

interface SliderStore {
  estimatedTime: number; // 분 단위로 소요시간
  estimatedCost: number; // 원 단위로 가격
  setEstimatedTime: (time: number) => void;
  setEstimatedCost: (cost: number) => void;
}

export const useSliderStore = create<SliderStore>((set) => ({
  estimatedTime: 0, // 초기값은 0분
  estimatedCost: 0, // 초기값은 0원
  setEstimatedTime: (time: number) => set({ estimatedTime: time }),
  setEstimatedCost: (cost: number) => set({ estimatedCost: cost }),
}));
