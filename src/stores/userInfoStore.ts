import { create } from "zustand";
import exprofilImg from "../assets/images/exProfileImg.svg";

interface UserInfo {
  nickname: string;
  email: string;
  region: string;
}

interface UserStore {
  userProfilePic: string;
  userInfo: UserInfo;
  updateUserPic: (newPic: string) => void;
  updateUserInfo: (newInfo: Partial<UserInfo>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userProfilePic: exprofilImg,

  userInfo: {
    nickname: "default",
    email: "default@gmail.com",
    region: "",
  },

  
  updateUserPic: (newPic: string) => 
    set (() => ({
      userProfilePic: newPic,
    })),
    
  updateUserInfo: (newInfo: Partial<UserInfo>) =>
    set((state) => ({
      userInfo: {...state.userInfo, ...newInfo},
    })),

}));