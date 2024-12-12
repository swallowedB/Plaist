import { useState } from "react";
import images from "../../assets/images/importImages";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

export default function ExplainCourse() {
  const [isCompletedThisPage, setisCompletedThisPage] = useState(true);
  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img
            src={images.progress_bar3}
            alt="Progress bar-posting-add-explain"
          />
        </figure>
      </aside>
      <section className="flex flex-col items-center justify-center">
        {/* 제목인풋 이미지추가인풋 설명인풋, 선택한 코스 이미지 렌더링 */}
        <CreateMyCourseFlowButton
          to="/create-course/flow4-sucesss-post"
          isCompleteThisPage={isCompletedThisPage}
        >
          다음
        </CreateMyCourseFlowButton>
      </section>
    </div>
  );
}
