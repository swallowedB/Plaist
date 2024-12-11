import BestCourseCards from "./bestCourse/BestCourseCards";

export default function MainBestCourse() {
  return (
    <div>
      <div className="text-white text-2xl font-extrabold font-['Pretendard'] leading-7 mb-[15px]">
        Best Course
      </div>
      <div>
        <BestCourseCards />
      </div>
    </div>
  );
}
