import { create } from "zustand";
import exprofilImg from "../assets/images/exProfileImg.svg";
import { getUserIdFromToken, getUserInfo } from "../api/userApi";
import images from "../assets/images/importImages";

interface UserInfo {
  fullName: string;
  email: string;
  region: string;
  image?: string;
}

interface UserStore {
  logout: () => void;
  userId: string | null;
  userProfilePic: string;
  userInfo: UserInfo;
  fetchUserInfo: () => Promise<void>;
  updateUserPic: (newPic: string) => void;
  setUserInfo: (updatedInfo: Partial<UserInfo>) => void;
  setUserId: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  userId: null,
  userProfilePic: images.course_user_profile_img,
  userInfo: {
    fullName: "",
    email: "",
    region: "",
    image: "",
  },

  setUserId: async () => {
    try {
      const userId = await getUserIdFromToken();
      set(() => ({ userId }));
    } catch (error) {
      console.error("UserId 추출 실패:", error);
    }
  },

  fetchUserInfo: async () => {
    try {
      const data = await getUserInfo();
      if (data) {
        if (!data.fullName) {
          console.warn(
            "fullname 값이 비어 있습니다. API 응답을 확인하세요:",
            data
          );
        }
        const profilePicUrl = data.image || exprofilImg;
        let region = "";

        if (data.username) {
          try {
            const parsedUsername = JSON.parse(data.username);
            region = parsedUsername.region || "";
          } catch (error) {
            console.warn("username 파싱 실패:", error);
          }
        }
        const updatedUserInfo = {
          fullName: data.fullName || "",
          email: data.email,
          region,
          image: data.image || "",
        };

        set(() => ({
          userInfo: updatedUserInfo,
          userProfilePic: profilePicUrl,
        }));
      }
    } catch (error) {
      console.error("사용자 정보 가져오기 오류 발생", error);
      throw error;
    }
  },

  updateUserPic: (newPic: string) => {
    set((state) => ({
      userProfilePic: newPic,
      userInfo: { ...state.userInfo, image: newPic },
    }));
  },

  setUserInfo: (updatedInfo: Partial<UserInfo>) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...updatedInfo },
    })),

  logout: () => {
    set(() => ({
      userId: null,
      userProfilePic: "",
      userInfo: { fullName: "", email: "", region: "", image: "" },
    }));
  },
}));
