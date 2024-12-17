import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./CourseEditor.module.css";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import AddedCoursebox from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddNewMyCourseButton";
import SliderBox from "../../components/createMyCourseMain/flow2/selectmain/sliderarea/SliderBox";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useSliderStore } from "./../../stores/sliderStore";

interface LocationObj {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: string;
}
interface SelectCourseMainProps {
  locationObjs: LocationObj[]; // locationObjs는 LocationObj 타입의 배열
  estimatedTime: number; // estimatedTime은 숫자
  estimatedCost: number; // estimatedCost는 숫자
  onPlus: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[]
  ) => void; // onPlus는 해당 데이터를 전달하는 함수
  onNext: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[],
    channelId: string
  ) => void; // onNext는 해당 데이터를 전달하고 channelId를 인자로 받는 함수
  onBack: () => void; // onBack은 반환값이 없는 함수
}

export default function SelectCourseMain({
  locationObjs,
  onPlus,
  onNext,
  onBack,
}: SelectCourseMainProps) {
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

  const handleDelete = (id: number) => {
    setCourseBoxes((prev) => prev.filter((box) => box.id !== id));
  };

  // useSliderStore에서 estimatedTime과 estimatedCost를 가져옴
  const { estimatedTime, estimatedCost } = useSliderStore();

  // handlePlus에서 estimatedTime과 estimatedCost를 onPlus로 전달
  const handlePlus: () => void = () => {
    onPlus(estimatedTime, estimatedCost, locationObjs); // 선택된 데이터 전달
  };

  const handleNext: () => void = () => {
    onNext(estimatedTime, estimatedCost, locationObjs, "channelId"); // channelId는 실제 값으로 대체
  };

  // 상태 변수 정의
  const [isCompletedThisPage, setIsCompletedThisPage] = useState(true);

  // courseBoxes 길이가 1 이상이고 estimatedTime, estimatedCost가 0보다 클 때만 완료 상태 true로 설정
  useEffect(() => {
    if (courseBoxes.length > 0 && estimatedTime > 0 && estimatedCost > 0) {
      setIsCompletedThisPage(true);
    } else {
      setIsCompletedThisPage(false);
    }
  }, [courseBoxes, estimatedTime, estimatedCost]);

  // 뒤로 가기 이벤트 처리
  useEffect(() => {
    const handlePopState = () => {
      onBack(); // 뒤로 가기 시 onBack 함수 실행
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState); // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    };
  }, [onBack]);

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
        <AddNewMyCourseButton onPlus={handlePlus} />
      </section>

      <div
        id="course-data-selector"
        className="flex flex-col items-center mb-[149px]"
      >
        <SliderBox />
      </div>

      <div className="flex flex-col items-center justify-center mb-[100px]">
        <CreateMyCourseFlowButton
          onNext={handleNext}
          isCompleteThisPage={isCompletedThisPage}
        >
          완료
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
