import BestCourseCards from "./bestCourse/BestCourseCards";

export default function MainBestCourse({
  className,
  courseList,
}: {
  className: string;
  courseList: Course[];
}) {
  return (
    <div>
      <div
        className={`
        ${className}
        text-white text-2xl font-extrabold font-pretendard leading-7 mb-[15px]`}
      >
        Best Course
      </div>
      <div>
        <BestCourseCards courseList={courseList} />
      </div>
    </div>
  );
}
