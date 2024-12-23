import PostingGuideTitle from "../../components/createMyCourse/PostingGuideTitle";
import MapDisplay from "../../components/createMyCourse/flow2/mapview/MapDisplay";

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
          onNext={(location: FullLocationObj) => {
            onNext(location);
          }}
        />
      </section>
    </div>
  );
}
