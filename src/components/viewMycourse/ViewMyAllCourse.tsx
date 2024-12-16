import { useEffect, useState } from "react";
import { getMyCourseObj } from "../../api/postApi";
import MyCourseSearch from "./MyCourseSearch";
import MyCourseCards from "./MyCourseCards";
import { getUserIdFromToken } from "../../api/userApi";

export default function ViewMyAllCourse() {
  const [courseList, setCourseList] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const currentUserId = getUserIdFromToken();
    setUserId(currentUserId);
  }, []);
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const res = await getMyCourseObj(userId);
        setCourseList(res);
      };
      fetchData();
    }
  }, [userId]); // userId가 변경될 때마다 실행

  return (
    <div className="flex flex-col items-center justify-center">
      <MyCourseSearch />
      <MyCourseCards courseList={courseList} />
    </div>
  );
}
