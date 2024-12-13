import { create } from "zustand";

type SliderStore = {
  // Duration 관련 상태
  durationSliderValue: number; // RangeSlider에서 받는 원본 값
  setDurationSliderValue: (value: number) => void; // Slider에서 원본 값 설정

  // Price 관련 상태
  priceSliderValue: number; // RangeSlider에서 받는 원본 값
  setPriceSliderValue: (value: number) => void; // Slider에서 원본 값 설정
};

export const useSliderStore = create<SliderStore>((set) => ({
  // Duration 초기값
  durationSliderValue: 60,
  durationInputHours: "1",
  durationInputMinutes: "0",
  setDurationSliderValue: (value) => set({ durationSliderValue: value }),

  // Price 초기값
  priceSliderValue: 0,
  priceInputMan: "0",
  priceInputCheon: "0",
  setPriceSliderValue: (value) => set({ priceSliderValue: value }),
}));
