import { create } from "zustand";

type ChannelType = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

interface State {
  isMenuClicked: { location: boolean; spot: boolean };
  location: string;
  spot: string;
  channelList: ChannelType[];
  locationList: ChannelType[];
  spotList: ChannelType[];
}
interface Action {
  toggleMenu: (menu: "location" | "spot") => void;
  setLocation: (location: string) => void;
  setSpot: (spot: string) => void;
  setChannelList: (channels: ChannelType[]) => void;
  setLocationList: (channels: ChannelType[]) => void;
  setSpotList: (channels: ChannelType[]) => void;
}
export const useChannelStore = create<State & Action>((set) => ({
  isMenuClicked: { location: false, spot: false },
  location: "전체",
  spot: "전체",
  channelList: [],
  locationList: [],
  spotList: [],

  // 메뉴 상태를 토글
  toggleMenu: (menu) =>
    set((state) => ({
      isMenuClicked: {
        location: menu === "location" ? !state.isMenuClicked.location : false,
        spot: menu === "spot" ? !state.isMenuClicked.spot : false,
      },
    })),

  // 위치 설정
  setLocation: (location) =>
    set({
      location,
      isMenuClicked: {
        location: false,
        spot: false,
      },
    }),

  // 스팟 설정
  setSpot: (spot) =>
    set({
      spot,
      isMenuClicked: {
        location: false,
        spot: false,
      },
    }),

  // 전체 채널 리스트 설정
  setChannelList: (channels) => set({ channelList: channels }),

  // 지역 리스트 설정
  setLocationList: (channels) =>
    set(() => ({
      locationList: channels.filter((ch) => ch.description === "지역"),
    })),

  // 스팟 리스트 설정
  setSpotList: (channels) =>
    set(() => ({
      spotList: channels.filter((ch) => ch.description === "스팟"),
    })),
}));
