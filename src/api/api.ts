import { axiosInstance } from "./axios";

// 전체 채널 목록을 불러옵니다.
export const getChannelList = async () => {
  try {
    const response = await axiosInstance.get(`/channels`);
    console.log(response.data);
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 특정 이름의 채널을 불러옵니다.
export const getChannel = async (channelName: string) => {
  try {
    const response = await axiosInstance.get(`/channels/${channelName}`, {
      headers: {
        Authorization: "Bearer your-token-here",
        name: "custom-value",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// admin only
// 새로운 채널을 생성합니다.
export const postChannel = async () => {
  try {
    const response = await axiosInstance.post(`/channels/create`);
    console.log(response.data);
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};
