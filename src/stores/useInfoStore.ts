import { create } from "zustand";
import exprofilImg from "../assets/images/exProfileImg.svg";
import { getUserIdFromToken, getUserInfo } from "../api/userApi";

interface UserInfo {
  fullName: string;
  email: string;
  region: string;
  image?: string;

}

interface UserStore {
  userId: string;
  userProfilePic: string;
  userInfo: UserInfo;
  fetchUserInfo: () => Promise<void>;
  updateUserPic: (newPic: string) => void;
  setUserInfo: (updatedInfo: Partial<UserInfo>) => void;
  setUserId: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userId: "",

  userProfilePic: "",

  userInfo: {
    fullName: "",
    email: "",
    region: "",
    image: "",
  },

  setUserId: () => {
    try{
      const userId = getUserIdFromToken();
      set(() => ({userId}));
    } catch (error){
      console.error("UserId 추출 실패:", error);
    }
  },

  fetchUserInfo: async () => {
    try{
      const data = await getUserInfo();

      if (!data.fullName) {
        console.warn('fullname 값이 비어 있습니다. API 응답을 확인하세요:', data);
      }

      const profilePicUrl = data.image || exprofilImg;
      let region = "";

      if(data.username){
        try{
          const parsedUsername = JSON.parse(data.username);
          console.log("Parsed Username:", parsedUsername); // 디버깅용
          region = parsedUsername.region || "";
        } catch (error){
          console.warn("username 파싱 실패:", error);
        }
      }

      set (() => ({
        userInfo: {
          fullName: data.fullName || "Unknown",
          email: data.email,
          region,
          image: data.image || "",
        },
        userProfilePic: profilePicUrl,
      }));
    } catch (error){
      console.error('사용자 정보 가져오기 오류 발생', error);
    }
  },
  
  updateUserPic: (newPic: string) => {
    set ((state) => ({
      userProfilePic: newPic,
      userInfo: {...state.userInfo, image: newPic},
    }));
  },
    
    
  setUserInfo: (updatedInfo: Partial<UserInfo>) =>
    set((state) => ({
      userInfo: {...state.userInfo, ...updatedInfo},
    })),

}));