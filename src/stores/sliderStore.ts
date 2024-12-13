import { create } from "zustand";

type SliderStore = {
  durationSliderValue: number;
  setDurationSliderValue: (value: number) => void;
  priceSliderValue: number;
  setPriceSliderValue: (value: number) => void;
};

export const useSliderStore = create<SliderStore>((set) => ({
  durationSliderValue: 60,
  setDurationSliderValue: (value) => set({ durationSliderValue: value }),

  priceSliderValue: 0,
  setPriceSliderValue: (value) => set({ priceSliderValue: value }),
}));
