import { useEffect } from "react";
import { deleteFollow } from "../api/api";
import { useAuthStore } from "../stores/authStore";
import MainBestCourse from "../components/main/MainBestCourse";
import MainTitle from "../components/main/MainTitle";
import TestCard from "../components/main/TestCard";

export default function Main() {
  let token = useAuthStore((state) => state.accessToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await deleteFollow("jade");
        console.log("API 응답 데이터:", data);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    // fetchData();
  }, []);
  if (typeof token === "object") {
    token = token?.toString();
  }
  return (
    <>
      <div className="flex flex-col bg-blue-400 min-w-[767px]">
        <div className="h-[47px] bg-red-400"></div>
        <div className="px-[60px] mt-[59px]">
          <MainTitle />
          <MainBestCourse />
          <TestCard />
        </div>
      </div>
    </>
  );
}
