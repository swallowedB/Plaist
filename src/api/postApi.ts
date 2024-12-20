import { axiosInstance } from "./axios";

// Channel에 해당하는 post 가져오기
export const getChannelPostList = async (
  channelId: string,
  offset = 0,
  limit = 1000
) => {
  try {
    const response = await axiosInstance.get(`/posts/channel/${channelId}`, {
      params: {
        offset,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `/posts/channel/${channelId} 호출 중 에러 발생`,
        error.message
      );
      throw new Error(
        `/posts/channel/${channelId} 호출 중 에러 발생 ${error.message}`
      );
    }
  }
};

// 특정 post를 가져오기
export const getCourseObj = async (
  contentId: string
): Promise<Course | undefined> => {
  try {
    const response = await axiosInstance.get(`/posts/${contentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyCourseObj = async (userId: string) => {
  try {
    console.log("userId:", userId);
    const response = await axiosInstance.get(`/posts/author/${userId}`);
    console.log("getMyobj:", response);
    return response.data.filter((val: any) => val.channel.name === "전체");
  } catch (error) {
    console.error(error);
  }
};
