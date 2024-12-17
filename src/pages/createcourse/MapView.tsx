import { useEffect } from "react";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/flow2/mapview/MapDisplay";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

interface LocationProps {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: string;
}

interface MapviewProps {
  onNext: (location: LocationProps) => void;
  onBack: () => void;
}

export default function Mapview({ onNext, onBack }: MapviewProps) {
  // 페이지 상단으로 스크롤 이동
  const goToTop = () => {
    const mapElement = document.getElementById("top");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // location 객체 정의 시 문법 오류 수정
  const location = {
    locationName: "피자집",
    locationAddress: "서울특별시 용산구",
    locationCategory: "음식점",
    locationPhoneNum: "121-3313-1111",
    location_id: "12434355",
    like: "12",
  };

  const handleNext: () => void = () => {
    onNext(location); // location 객체 전달
  };

  useEffect(() => {
    // 뒤로 가기 이벤트 감지
    const handlePopState = () => {
      onBack(); // 뒤로 가기 시 onBack 함수 호출
    };

    // popstate 이벤트 리스너 등록
    window.addEventListener("popstate", handlePopState);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onBack]);

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
        <MapDisplay goToTop={goToTop} />
        <CreateMyCourseFlowButton onNext={handleNext} isCompleteThisPage={true}>
          선택
        </CreateMyCourseFlowButton>
      </section>
    </div>
  );
}
