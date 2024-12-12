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
          <img src={images.progress_bar4} alt="Progress bar-sucess-posting" />
        </figure>
      </aside>

      <section className="flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-bold text-primary-800 mb-[60px]">
          코스생성이 완료되었습니다
        </h1>
        <p>주변에 공유해서 베스트 코스러가 되어보세요</p>
        <CreateMyCourseFlowButton
          to="/"
          isCompleteThisPage={isCompletedThisPage}
        >
          다양한 코스 구경하기
        </CreateMyCourseFlowButton>
      </section>
    </div>
  );
}
