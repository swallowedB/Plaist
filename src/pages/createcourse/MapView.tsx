import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/flow2/mapview/MapDisplay";

interface LocationProps {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: number;
}

interface MapviewProps {
  onNext: (location: LocationProps) => void;
}

export default function Mapview({ onNext }: MapviewProps) {
  return (
    <div>
      <PostingGuideTitle
        alignClass="flex justify-center"
        titleText="지도에서 코스를 선택해주세요"
        mt={80}
      />
      <section className="flex flex-col items-center">
        <MapDisplay
          onNext={(location: LocationProps) => {
            onNext(location);
          }}
        />
      </section>
    </div>
  );
}
