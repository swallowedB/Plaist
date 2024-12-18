import { useEffect, useState } from "react";
import BestCourseCardItem from "./BestCourseCardItem";
import { sortCoursesByLike } from "../../../utills/main/fomatter";

export default function BestCourseCards({
  courseList,
}: {
  courseList: Course[];
}) {
  const [bestCourses, setBestCourses] = useState<Course[]>([]);

  useEffect(() => {
    const sortedList = sortCoursesByLike(courseList);
    setBestCourses(sortedList);
  }, [courseList]);

  return (
    <div className="flex gap-5">
      {bestCourses.map((item) => {
        return <BestCourseCardItem key={item._id} courseData={item} />;
      })}
    </div>
  );
}
