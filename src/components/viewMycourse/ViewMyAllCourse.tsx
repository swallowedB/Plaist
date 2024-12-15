import { useEffect, useState } from "react";
import { getChannelPostList } from "../../api/postApi";
import { useQuery } from "@tanstack/react-query";

import MyCourseSearch from "./MyCourseSearch";
import MyCourseCards from "./MyCourseCards";

const allCourseChannelId = `675e6ed26ada400ee6bec120`;
  // 여기에 내 코스만 필터되도록 넣어놓으셈
  // 내 코스만 필터된 것에서 서치바 검색이 감지되면 mycourse가 저장된 것(메모이제이션 사용)에서 다시 필터
export default function ViewMyAllCourse() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getChannelPostList(allCourseChannelId);
      setCourseList(res);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <MyCourseSearch />
      <MyCourseCards courseList={courseList} />
    </div>
  );
}
