import { useQuery } from "@tanstack/react-query";

import { getChannelPostList } from "../../api/postApi";
import Loader from "../../components/skeletonUI/Loader";
import MainTitle from "../../components/main/MainTitle";
import MainBestCourse from "../../components/main/MainBestCourse";
import MainAllCourse from "../../components/main/MainAllCourse";
import { allCourseChannelId } from "../../utills/constants/channelId";

export default function Main() {
  const { data: courseList, isLoading: isPostListLoading } = useQuery({
    queryKey: ["getPostList", allCourseChannelId],
    queryFn: () => {
      if (!allCourseChannelId) {
        throw new Error("channel ID is required");
      }
      return getChannelPostList(allCourseChannelId);
    },
  });

  return (
    <>
      {isPostListLoading ? (
        <div className="flex flex-col items-center justify-center mt-[60px]">
          <Loader />
        </div>
      ) : (
        <div className="relative flex flex-col items-center h-screen bg-white min-w-[767px] ">
          {/* 백그라운드 블러 */}
          <div className="absolute blur-bg-left z-[0]" />

          <div className="px-[60px] mt-[59px]">
            <MainTitle className={`relative z-100`} />
            <MainBestCourse
              className={`relative z-100`}
              courseList={courseList}
            />
            <MainAllCourse courseList={courseList} />
          </div>
        </div>
      )}
    </>
  );
}
