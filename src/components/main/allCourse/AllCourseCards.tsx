import AllCourseCardItem from "./AllCourseCardItem";

import Pagenation from "../utils/Pagenation";
import { usePagination } from "../../../hooks/mainFeed/usePagenation";
import { useSortedCourses } from "../../../hooks/mainFeed/useSortedCourses";
import { useSortMainStore } from "../../../stores/main/comment/useSortStore";

export default function AllCourseCards({
  courseList,
}: {
  courseList: Course[];
}) {
  const { activeSort } = useSortMainStore();
  const sortedCourses = useSortedCourses(courseList, activeSort);
  const { paginatedData, currentPage, totalPages, handlePageChange } =
    usePagination(sortedCourses, 8);

  return (
    <div className="pb-[100px]">
      <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
        {paginatedData.map((courseItem, idx) => (
          <AllCourseCardItem key={idx} courseItem={courseItem} />
        ))}
      </div>
      <Pagenation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
