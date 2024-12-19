import { useMemo } from "react";
import AllCourseCardItem from "./AllCourseCardItem";
import { useSortMainStore } from "../../../stores/main/comment/useSortStore";
import {
  sortCoursesByCreatedAt,
  sortCoursesByLike,
} from "../../../utills/main/fomatter";

export default function AllCourseCards({
  courseList,
}: {
  courseList: Course[];
}) {
  const { activeSort } = useSortMainStore();
  const sortedCourses = useMemo(() => {
    if (activeSort === "popular") {
      return sortCoursesByLike(courseList, 2000);
    } else if (activeSort === "latest") {
      return sortCoursesByCreatedAt(courseList, 2000);
    }
    return courseList;
  }, [courseList, activeSort]);
  return (
    <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
      {sortedCourses?.map((courseItem: Course, idx: number) => {
        return <AllCourseCardItem key={idx} courseItem={courseItem} />;
      })}
    </div>
  );
}
