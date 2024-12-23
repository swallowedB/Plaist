import { axiosInstance } from "./axios";

import { getToken } from "../utills/Auth/getTokenWithCloser";

const token = getToken();

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "multipart/form-data", // 명시적으로 Content-Type을 설정
};

// post
export const postMyCourse = async ({
  title,
  image,
  channelId,
}: PostMyCourseProps) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image || "");
    formData.append("channelId", channelId);

    const response = await axiosInstance.post("/posts/create", formData, {
      headers,
    });

    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
// put
export const editMyCourse = async ({
  postId,
  title,
  image,
  imageToDeletePublicId,
  channelId,
}: EditMyCourseProps) => {
  try {
    const formData = new FormData();
    formData.append("postId", postId!);
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }
    if (imageToDeletePublicId) {
      formData.append("imageToDeletePublicId", imageToDeletePublicId);
    }
    formData.append("channelId", channelId);

    const response = await axiosInstance.put("/posts/update", formData, {
      headers,
    });

    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};

// delete
export const deleteMyCourse = async (postId: string) => {
  try {
    const response = await axiosInstance.delete("/posts/delete", {
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      data: { id: postId },
    });

    console.log("삭제된 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
