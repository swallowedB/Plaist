import { axiosInstance } from "./axios";

// 전체 채널 목록을 불러옵니다.
export const getChannelList = async () => {
  try {
    const response = await axiosInstance.get(`/channels`);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

// 특정 이름의 채널을 불러옵니다.
export const getChannel = async (channelName: string) => {
  try {
    const response = await axiosInstance.get(`/channels/${channelName}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`channel/${channelName} 호출 중 에러 발생`, error.message);
      throw new Error(`channel/${channelName} 호출 중 에러 발생`);
    }
  }
};

// admin only
// 새로운 채널을 생성합니다.
export const setChannel = async (requestBody: ChannelCreateRequestType) => {
  try {
    const response = await axiosInstance.post(`/channels/create`, requestBody);
    console.log("채널 생성 성공: ", response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `channel/${requestBody.name} 생성 요청 중 에러 발생`,
        error.message
      );
      throw new Error(`channel/${requestBody.name} 생성 요청 중 에러 발생`);
    }
  }
};
