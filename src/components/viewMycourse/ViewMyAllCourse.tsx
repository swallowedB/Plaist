import { useEffect, useState } from "react";
import { getMyCourseObj } from "../../api/postApi";
import MyCourseSearch from "./MyCourseSearch";
import MyCourseCards from "./MyCourseCards";
import { getUserIdFromToken } from "../../api/userApi";

export default function ViewMyAllCourse() {
  const [courseList, setCourseList] = useState([]);
  const [userId, setUserId] = useState("");
  const [searchCourseList, setsearchCourseList] = useState("");

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

  const setSearch = (searchCourse: string) => {
    setsearchCourseList(searchCourse);
  };
  const onSearch = () => {
    const fetchData = async () => {
      const res = await getMyCourseObj(userId);
      const filteredCourses = res.filter((course: Course) => {
        const parsedTitle = JSON.parse(course["title"]);
        return parsedTitle.courseTitle.includes(searchCourseList);
      });

      setCourseList(filteredCourses);
    };
    fetchData();
  };

  return (
    <div className="px-[60px]">
      <MyCourseSearch setSearch={setSearch} onSearch={onSearch} />
      <MyCourseCards courseList={courseList} />
    </div>
  );
}
