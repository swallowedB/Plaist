import CourseAllCourseSortToggle from "../utils/CourseAllCourseSortToggle";
import SearchInputFeild from "./SearchInputFeild";

export default function AllCourseHeader() {
  return (
    <>
      <p className="text-2xl font-extrabold leading-7 font-pretendard text-primary-500">
        All Course
      </p>
      <SearchInputFeild />
      <div className="flex justify-end w-full mt-[18px] mb-[19px]">
        <CourseAllCourseSortToggle />
      </div>
    </>
  );
}
