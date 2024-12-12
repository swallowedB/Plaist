import BestCourseCards from "./bestCourse/BestCourseCards";

export default function MainBestCourse({className}) {
  return (
    <div>
      <div className={`
        ${className}
        text-white text-2xl font-extrabold font-pretendard leading-7 mb-[15px]`}>
        Best Course
      </div>
      <div>
        <BestCourseCards />
      </div>
    </div>
  );
}
