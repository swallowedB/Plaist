import { useMemo } from "react";
import { sortCoursesByCreatedAt, sortCoursesByLike } from "../../utills/main/fomatter";


export function useSortedCourses(
  courseList: Course[],
  activeSort: string
): Course[] {
  return useMemo(() => {
    if (activeSort === "popular") {
      return sortCoursesByLike(courseList, 2000);
    } else if (activeSort === "latest") {
      return sortCoursesByCreatedAt(courseList, 2000);
    }
    return courseList;
  }, [courseList, activeSort]);
}
