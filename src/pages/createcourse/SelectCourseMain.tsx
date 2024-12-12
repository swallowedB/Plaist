import { useState } from "react";
import images from "../../assets/images/importImages";
import CreateNewMy from "../../components/createMyCourseMain/CreatNewCoursebox";
import CreatedCoursebox from "./../../components/createMyCourseMain/CreatedCoursebox";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

export default function SelectCourseMain() {
  const [isCompletedThisPage, setisCompletedThisPage] = useState(true);
  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={images.progress_bar2} alt="Progress bar-select-course" />
        </figure>
      </aside>
      <h1 className="text-[36px] font-bold text-primary-800 mb-[60px]">
        나만의 코스를 생성
      </h1>
      <section className="flex flex-col items-center justify-center">
        <CreatedCoursebox />
        <CreateNewMy />
        <CreateMyCourseFlowButton
          to="/create-course/flow3-explain-course"
          isCompleteThisPage={isCompletedThisPage}
        >
          다음
        </CreateMyCourseFlowButton>
      </section>
    </div>
  );
}
