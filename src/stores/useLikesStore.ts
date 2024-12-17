import { getUserInfo } from "../api/userApi";
import { create } from 'zustand';

type Like = {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
};

type LikesStore = {
  likes: Like[];
  fetchLikes: () => Promise<void>;
};

export const useLikesStore = create<LikesStore>((set) => ({
  likes: [],
  fetchLikes: async () => {
    try{
      const userInfo = await getUserInfo();
      set({ likes: userInfo.likes });
    } catch (error){
      console.error("Error fetching likes:", error);
    }
  },
}));