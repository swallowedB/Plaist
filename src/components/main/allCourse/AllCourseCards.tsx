import AllCourseCardItem from "./AllCourseCardItem";
import { useSortMainStore } from "../../../stores/main/comment/useSortStore";
import Pagenation from "../utils/Pagenation";
import { useSortedCourses } from "../../../hooks/mainFeed/useSortedCourses";
import { usePagination } from "../../../hooks/mainFeed/usePagenation";

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
    <div>
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
