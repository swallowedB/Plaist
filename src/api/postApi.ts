import { axiosInstance } from "./axios";

export const getChannelPostList = async (
  channelId: string,
  offset = 0,
  limit = 10
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
