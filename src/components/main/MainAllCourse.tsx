import AllCourseCards from "./allCourse/AllCourseCards";
import AllCourseHeader from "./allCourse/AllCourseHeader";

export default function MainAllCourse() {
  return (
    <div className="flex flex-col items-center justify-center mt-[60px]">
      <AllCourseHeader />
      <AllCourseCards />
    </div>
  );
}
