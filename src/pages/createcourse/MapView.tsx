import { Dispatch, SetStateAction } from "react";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/flow2/mapview/MapDisplay";

interface MapviewProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  currentStep: string;
}

export default function Mapview({ setCurrentStep, currentStep }: MapviewProps) {
  // 페이지 상단으로 스크롤 이동
  const goToTop = () => {
    const mapElement = document.getElementById("top");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="top">
      <PostingGuideTitle
        alignClass="flex justify-center"
        titleText="첫번째 코스를 선택"
        mt={80}
      />
      <section className="flex flex-col items-center">
        {/* 가이드 제목 컴포넌트 */}

        {/* 지도 및 검색 결과 표시 컴포넌트 */}
        <MapDisplay
          goToTop={goToTop} // 스크롤 이동 함수 전달
          setCurrentStep={setCurrentStep} // 단계 변경 함수 전달
          currentStep={currentStep}
        />
      </section>
    </div>
  );
}
