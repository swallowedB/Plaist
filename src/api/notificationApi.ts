// import axios from "axios";
import { axiosInstance } from "./axios";

// 알림창
export const getNotification = async () => {
  try {
    const response = await axiosInstance.get(`/notifications`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("/notifications 호출 중 오류 발생:", error);
    return []; // 오류 시 빈 배열 반환
  }
};

// 알림 확인
export const seenNotification = async () => {
  try {
    await axiosInstance.put("/notifications/seen");
    console.log("seen");
  } catch (error) {
    console.error("notification update 중 오류", error);
  }
};

// 알림 생성
export const createNotification = async (
  notificationType: NotificationType,
  notificationTypeId: string,
  userId: string,
  postId: string
) => {
  try {
    const response = await axiosInstance.post("/notifications/create", {
      notificationType: notificationType,
      notificationTypeId: notificationTypeId,
      userId: userId,
      postId: postId,
    });
    console.log("notification Created");
    console.log(response);
  } catch (error) {
    console.error("notification update 중 오류", error);
  }
};
