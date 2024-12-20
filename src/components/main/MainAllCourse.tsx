import { useState } from "react";
import SearchBar from "../utills/SearchBar";
import AllCourseCards from "./allCourse/AllCourseCards";
import AllCourseHeader from "./allCourse/AllCourseHeader";
import CourseAllCourseSortToggle from "./utils/CourseAllCourseSortToggle";

export default function MainAllCourse({
  courseList,
}: {
  courseList: Course[];
}) {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredData, setFilteredData] = useState<Course[]>([]);

  const handleSearch = (result: Course[]) => {
    setIsSearching(result.length > 0 || result.length === 0);
    setFilteredData(result);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[60px]">
      <p className="text-2xl font-extrabold leading-7 font-pretendard text-primary-500 mt-[10px] mb-8">
        All Course
      </p>
      {/* 검색바 */}
      <div className="">
        
      <SearchBar 
        data={courseList} 
        searchKey={["courseTitle","courseDescription", "author", "title"]}
        onSearch={handleSearch}
        placeholder="어떤 코스를 즐기고 싶으신가요?(｡･∀･)ﾉﾞ" 
        className={`bg-custom-gray/10 shadow-none hover:bg-custom-gray/10 hover:shadow-default
          focus:bg-custom-gray/10
          `}
        />
      </div>
      <div className="flex justify-end w-full mb-[15px]">
        <CourseAllCourseSortToggle />
      </div>
      {/* 필터링된 데이터 렌더링 */}
      {isSearching ? (
        filteredData.length > 0 ? (
          <AllCourseCards courseList={filteredData} />
        ) : (
          <div className="col-span-3 mt-10 text-sm text-center font-semiBold text-primary-700 font-pretendard">
            검색 결과를 찾지 못했어요 ψ(´´∀´´)ψ
          </div>
        )
      ): courseList.length > 0 ? (
        <AllCourseCards courseList={courseList} />
      ) : (
        <div className="col-span-3 mt-10 text-sm font-medium text-center text-primary-700 font-pretendard">
          첫 코스러가 되어 보세요! o(*￣▽￣*)ブ
        </div>
      )}
    </div>
  );
}
