import { useEffect, useState } from "react";
import AllCourseCards from "./allCourse/AllCourseCards";
import AllCourseHeader from "./allCourse/AllCourseHeader";
import { getChannelPostList } from "../../api/postApi";
import { useQuery } from "@tanstack/react-query";

const allCourseChannelId = `675e6ed26ada400ee6bec120`;

export default function MainAllCourse() {
 

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getChannelPostList(allCourseChannelId);
      setCourseList(res);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[60px]">
      <AllCourseHeader />
      <AllCourseCards courseList={courseList} />
    </div>
  );
}
