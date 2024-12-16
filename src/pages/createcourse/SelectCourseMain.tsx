import { useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./CourseEditor.module.css";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import AddedCoursebox from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddNewMyCourseButton";
import SliderBox from "../../components/createMyCourseMain/flow2/selectmain/sliderarea/SliderBox";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

import { Dispatch, SetStateAction } from "react";

// props로 `setCurrentStep`과 `currentStep`을 받는 타입 정의
interface SelectCourseMainProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
}

export default function SelectCourseMain({
  setCurrentStep,
  currentStep,
}: SelectCourseMainProps) {
  // 아래는 mock 데이터
  const [courseBoxes, setCourseBoxes] = useState([
    {
      id: 1,
      title: "첫번째 코스",
      address: "서울 용산구 이태원동...",
      category: "음식점",
    },
    {
      id: 2,
      title: "두번째 코스",
      address: "서울 강남구...",
      category: "카페",
    },
    {
      id: 3,
      title: "세번째 코스",
      address: "서울 종로구...",
      category: "관광지",
    },
  ]);

  // 삭제 함수
  const handleDelete = (id: number) => {
    setCourseBoxes((prev) => prev.filter((box) => box.id !== id));
  };

  const [isCompletedThisPage, setIsCompletedThisPage] = useState(true);

  return (
    <div>
      <PostingGuideTitle titleText="나만의 코스를 생성" />

      <section
        id="course-editor"
        className={twMerge(styles.courseEditorContainer)}
      >
        {courseBoxes.map((box) => (
          <AddedCoursebox
            key={box.id}
            id={box.id}
            title={box.title}
            address={box.address}
            category={box.category}
            onDelete={handleDelete}
          />
        ))}
        <AddNewMyCourseButton />
      </section>

      <div
        id="course-data-selector"
        className="flex flex-col items-center mb-[149px]"
      >
        <SliderBox />
      </div>

      {/* 완료 버튼 */}
      <div className="flex flex-col items-center justify-center mb-[100px]">
        <CreateMyCourseFlowButton
          isCompleteThisPage={isCompletedThisPage}
          isLastStep={false} // 마지막 단계 아님
          setCurrentStep={setCurrentStep}
          currentStep={currentStep} // 현재 단계 인덱스 전달
        >
          완료
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
