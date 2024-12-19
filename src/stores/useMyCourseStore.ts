import { create } from "zustand";
import { getMyCourseObj } from "../api/postApi";

type CardData = {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationAddress: string;
  likes: number;
  image: string;
};

type MyCourseState = {
  myCourseList: CardData[];
  fetchMyCourses: (userId: string) => Promise<void>;
};

export const useMyCourseStore = create<MyCourseState>((set) => ({
  myCourseList: [],


  fetchMyCourses: async (userId: string) => {
    try{
      const data = await getMyCourseObj(userId);

      if (!data || !Array.isArray(data)) {
        console.warn("Invalid data format:", data);
        return;
      }

      const parsedData: CardData[] = data.map((item: any) => {
        try{
          const parsedTitle = JSON.parse(item.title);
          console.log("위치정보확인 :", parsedTitle);

          const getFirstTwoWords = (input: string) => input.split(" ").slice(0, 2).join(" ");

          return {
            id: item._id,
            title: parsedTitle,
            courseTitle: parsedTitle.courseTitle || "제목 없음",
            courseDescription: parsedTitle.courseDescription || " ",
            locationAddress: getFirstTwoWords(parsedTitle.locationObjs[0]?.locationAddress) || "위치 정보 없음",
            likes: item.likes?.length || 0,
            image: item.image || "",
          };
        } catch (error){
          console.warn("JSON parsing error:", item.title);
          return {
            id: "unknown",
            courseTitle: "제목 없음",
            courseDescription: " ",
            locationAddress: "위치 정보 없음",
            likes: 0,
            image: "",
          };
        };
      });
      set({
        myCourseList: parsedData
      });
    } catch (error){
      console.error("fetching Error :", error);
    }
  }
}))