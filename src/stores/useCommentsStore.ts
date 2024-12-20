import { create } from "zustand";
import { getUserInfo } from "../api/userApi";
import { getCourseObj } from "../api/postApi";

interface CommentType {
  author: string;
  comment: string;
  createdAt: string;
  post: string;
  _id: string;
}

interface PostType {
  [key: string]: {
    title: any;
    courseTitle: string;
    locationObjs: any[];
    likes: number;
  };
}

type CommentsState = {
  comments: CommentType[];
  posts: PostType;
  fetchComments: () => Promise<void>;
  fetchPostById: (postId: string) => Promise<void>;
};

export const useCommentsStore = create<CommentsState>((set, get) => ({
  comments: [],
  posts: {},

  // 댓글 목록 가져오기
  fetchComments: async () => {
    try {
      const data = await getUserInfo();

      if (!data || !data.comments) {
        console.warn(
          "댓글 데이터가 비어 있습니다. API 응답을 확인하세요:",
          data
        );
        set({ comments: [] });
        return;
      }

      const formattedComments: CommentType[] = data.comments.map(
        (item: any) => ({
          author: item.author || "Unknown",
          comment: item.comment || "No content",
          createdAt: item.createdAt || new Date().toISOString(),
          post: item.post || "Unknown",
          _id: item._id || "Unknown",
        })
      );

      const sortedComments = formattedComments.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      set({ comments: sortedComments });
    } catch (error) {
      console.error("fetch Comments 실패:", error);
      set({ comments: [] });
    }
  },

  fetchPostById: async (postId: string) => {
    const { posts } = get();
    if (posts[postId]) return;

    try {
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
            courseTitle: parsedTitle.courseTitle || "제목 없음",
            locationObjs: parsedTitle.locationObjs || [],
          },
        },
      }));
    } catch (error) {
      console.error(`게시물 ${postId} 불러오기 실패`, error);
    }
  },
}));
