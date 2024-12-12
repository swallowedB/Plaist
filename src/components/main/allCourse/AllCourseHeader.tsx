import AllCourseSortToggle from "./AllCourseSortToggle";
import SearchInputFeild from "./SearchInputFeild";

export default function AllCourseHeader() {
  return (
    <>
      <p className="text-2xl font-extrabold leading-7 font-pretendard text-primary-500">
        All Course
      </p>
      <SearchInputFeild />
      <AllCourseSortToggle activeSort={"latest"} onSortChange={"false"} />
    </>
  );
}
