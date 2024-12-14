import { useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./CourseEditor.module.css";
import images from "../../assets/images/importImages";
//공통
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
// Editbox
import AddedCoursebox from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddNewMyCourseButton";
// 나만의 코스 세부 정보
import SliderBox from "../../components/createMyCourseMain/flow2/selectmain/sliderarea/SliderBox";

export default function SelectCourseMain() {
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

  const [isCompletedThisPage, setisCompletedThisPage] = useState(true);

  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={images.progress_bar2} alt="Progress bar-select-course" />
        </figure>
      </aside>
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
      <div className="flex flex-col items-center justify-center mb-[100px]">
        <CreateMyCourseFlowButton
          to="/create-course/flow3-explain-course"
          isCompleteThisPage={isCompletedThisPage}
        >
          다음
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
