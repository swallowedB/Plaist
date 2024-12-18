import AllCourseCards from "./allCourse/AllCourseCards";
import AllCourseHeader from "./allCourse/AllCourseHeader";

import Pagenation from "../../components/main/utils/Pagenation";
import { useEffect, useState } from "react";

export default function MainAllCourse({
  courseList,
}: {
  courseList: Course[];
}) {
  const [data, setData] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);

  useEffect(() => {
    setData(courseList);
  }, [courseList]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[60px]">
      <>
        <AllCourseHeader />
        <AllCourseCards courseList={paginatedData} />
        <Pagenation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    </div>
  );
}
