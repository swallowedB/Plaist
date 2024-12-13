import { useState } from "react";
import images from "../../assets/images/importImages";
// Editbox
import AddedCoursebox from "../../components/createMyCourseMain/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/AddNewMyCourseButton";
// 나만의 코스 세부 정보
import TotalPriceSelector from "./../../components/createMyCourseMain/TotalPriceSelector";
import TotalDurationSelector from "../../components/createMyCourseMain/TotalDurationSelector";
// 이동 버튼
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
// 모듈 스타일
import styles from "./CourseEditor.module.css";

export default function SelectCourseMain() {
  // AddedCoursebox 관리 상태
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
      <h1 className="text-[36px] font-bold text-primary-800 mb-[60px]">
        나만의 코스를 생성
        {/* 코스 생성 시작이면 "첫번째 코스를 생성" 으로 h1내용 수정*/}
      </h1>
      <section id="course-editor" className={styles.courseEditorContainer}>
        {courseBoxes.map((box) => (
          <AddedCoursebox
            key={box.id}
            id={box.id}
            title={box.title}
            address={box.address}
            category={box.category}
            onDelete={handleDelete} // 삭제 함수 전달
          />
        ))}
        <AddNewMyCourseButton />
      </section>
      <div
        id="course-data-selector"
        className="flex flex-col items-center mb-[149px]"
      >
        <TotalPriceSelector />
        <TotalDurationSelector />
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
