import { create } from "zustand";

export const useChannelStore = create<State & Action>((set) => ({
  location: { id: "전국", name: "전국" },
  spot: { id: "전체", name: "전체" },
  channelList: { location: [], spot: [] },

  // 위치 설정
  setLocation: (locationId, locationName) =>
    set({
      location: { id: locationId, name: locationName },
    }),

  // 스팟 설정
  setSpot: (spotId, spotName) =>
    set({
      spot: { id: spotId, name: spotName },
    }),

  // 전체 채널 리스트 설정
  setChannelList: (channels) =>
    set({
      channelList: {
        location: channels.filter((ch) => ch.description === "지역"),
        spot: channels.filter((ch) => ch.description === "스팟"),
      },
    }),
}));
