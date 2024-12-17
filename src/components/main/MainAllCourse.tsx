import { useEffect, useState } from "react";
import AllCourseCards from "./allCourse/AllCourseCards";
import AllCourseHeader from "./allCourse/AllCourseHeader";
import { getChannelPostList } from "../../api/postApi";
import { allCourseChannelId } from "../../utills/constants/channelId";
import { useQuery } from "@tanstack/react-query";
import Loader from "../skeletonUI/Loader";

export default function MainAllCourse() {
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
    <div className="flex flex-col items-center justify-center mt-[60px]">
      {isPostListLoading ? (
        <Loader />
      ) : (
        <>
          <AllCourseHeader />
          <AllCourseCards courseList={courseList} />
        </>
      )}
    </div>
  );
}
