import { useEffect } from "react";
import { deleteFollow } from "../api/api";
import { useAuthStore } from "../stores/authStore";
import MainBestCourse from "../components/main/MainBestCourse";
import MainTitle from "../components/main/MainTitle";
import MainAllCourse from "../components/main/MainAllCourse";

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
      <div className="relative flex flex-col items-center h-screen bg-white min-w-[767px] ">
        {/* 백그라운드 블러 */}
        <div className="absolute blur-bg-left z-[0]" />

        <div className="px-[60px] mt-[59px]">
          <MainTitle className={`relative z-100`} />
          <MainBestCourse className={`relative z-100`} />
          <MainAllCourse />
        </div>
      </div>
    </>
  );
}
