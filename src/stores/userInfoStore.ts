import { create } from "zustand";
import exprofilImg from "../assets/images/exProfileImg.svg";
import { getUserInfo } from "../api/userApi";

interface UserInfo {
  fullName: string;
  email: string;
  region: string;
}

interface UserStore {
  userProfilePic: string;
  userInfo: UserInfo;
  fetchUserInfo: () => Promise<void>;
  updateUserPic: (newPic: string) => void;
  setUserInfo: (newInfo: Partial<UserInfo>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userProfilePic: exprofilImg,

  userInfo: {
    fullName: "",
    email: "",
    region: "",
  },

  fetchUserInfo: async () => {
    try{
      const data = await getUserInfo();

      if (!data.fullName) {
        console.warn('fullname 값이 비어 있습니다. API 응답을 확인하세요:', data);
      }

      set (() => ({
        userInfo: {
          fullName: data.fullName || "Unknown",
          email: data.email,
          region: data.region || "",
        },
      }));
      console.log('Updated user info:', data);
    } catch (error){
      console.error('사용자 정보 가져오기 오류 발생', error);
    }
  },
  
  updateUserPic: (newPic: string) => 
    set (() => ({
      userProfilePic: newPic,
    })),
    
  setUserInfo: (newInfo: Partial<UserInfo>) =>
    set((state) => ({
      userInfo: {...state.userInfo, ...newInfo},
    })),

}));