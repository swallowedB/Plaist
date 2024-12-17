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
  locationObjs: LocationObj[];
  onPlus: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[]
  ) => void;
  onNext: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[],
    channelId: string
  ) => void;
  onBack: () => void;
}

export default function SelectCourseMain({
  locationObjs,
  onPlus,
  onNext,
  onBack,
}: SelectCourseMainProps) {
  // 가상 데이터
  locationObjs = [
    {
      locationName: "솔레미오",
      locationAddress: "서울특별시 용산구",
      locationCategory: "서울",
      locationPhoneNum: "번호",
      location_id: "1239484",
      like: "12",
    },
  ];

  const [courseBoxes, setCourseBoxes] = useState([
    {
      brand: "솔레미오",
      address: "서울 용산구 이태원동...",
      category: "음식점",
    },
    {
      brand: "명랑핫도구 1호점",
      address: "서울 강남구...",
      category: "카페",
    },
    {
      brand: "디너서울",
      address: "서울 종로구...",
      category: "관광지",
    },
  ]);

  const handleDelete = (id: number) => {
    setCourseBoxes((prev) => prev.filter((_, index) => index !== id));
  };

  // useSliderStore에서 estimatedTime과 estimatedCost를 가져옴
  const { estimatedTime, estimatedCost } = useSliderStore();

  // handlePlus에서 estimatedTime과 estimatedCost를 onPlus로 전달
  const handlePlus = () => {
    onPlus(estimatedTime, estimatedCost, locationObjs); // onPlus가 제대로 호출되도록 전달
  };

  const channelId = "121244"; // 타입 애러때문에 넣어둠
  const handleNext = () => {
    onNext(estimatedTime, estimatedCost, locationObjs, channelId); // 올바른 순서로 인수 전달
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
        {courseBoxes.map((box, index) => (
          <AddedCoursebox
            key={box.brand}
            brand={box.brand}
            index={index}
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
        <CreateMyCourseFlowButton onNext={handleNext} isCompleteThisPage={true}>
          완료
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
