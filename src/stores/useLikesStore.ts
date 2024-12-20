import { getCourseObj } from "../api/postApi";
import { getUserInfo } from "../api/userApi";
import { create } from 'zustand';
import defaultImg from "../assets/images/default.png"

type Like = {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
};

type PostType = {
  [key: string]: {
    image: string;
    likes: any;
    title: any;
    courseTitle: string;
    locationObjs: any[];
  };
}


type LikesStore = {
  likes: Like[];
  posts: PostType;
  fetchLikes: () => Promise<void>;
  fetchPostById: (postId: string) => Promise<void>;
};

export const useLikesStore = create<LikesStore>((set, get) => ({
  likes: [],
  posts: {},

  // 좋아요 목록 가져오기
  fetchLikes: async () => {
    try{
      const userInfo = await getUserInfo();
      set({ likes: userInfo.likes });
    } catch (error){
      console.error("Error fetching likes:", error);
    }
  },

  fetchPostById: async(postId: string) => {
    const { posts } = get();
    if (posts[postId]) return; 

    try{
      const postData = await getCourseObj(postId);

      if (!postData) {
        console.warn(`postId ${postId}에 대한 데이터가 없습니다.`);
        return;
      }

      const parsedTitle = JSON.parse(postData.title);
      set((state) => ({
        posts: {
          ...state.posts,
          [postId]: {
            likes: postData.likes.length,
            title: parsedTitle,
            courseTitle: parsedTitle .courseTitle || "제목 없음",
            locationObjs: parsedTitle .locationObjs || [],
            image: postData.image || defaultImg, // 기본 이미지 추가
          },
        },
      }));
    } catch (error) {
      console.error(`게시물 ${postId} 불러오기 실패`, error);
    }
  }
}));