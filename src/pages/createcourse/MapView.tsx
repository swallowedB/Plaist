import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/flow2/mapview/MapDisplay";
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
  const handleNext: () => void = () => {
    onNext(location);
  };
  // location을 받아야 됨

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
        />
        <CreateMyCourseFlowButton onNext={handleNext} isCompleteThisPage={true}>
          선택
        </CreateMyCourseFlowButton>
      </section>
    </div>
  );
}
