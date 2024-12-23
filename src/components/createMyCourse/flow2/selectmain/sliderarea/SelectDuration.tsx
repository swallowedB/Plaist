import RangeSlider from "./RangeSlider";
import SliderLabel from "./SliderLabel";
import SliderDisplay from "./SliderDisplay";

import { useSliderStore } from "../../../../../stores/sliderStore";

export default function SelectDuration() {
  const { estimatedTime, setEstimatedTime } = useSliderStore();
  // duration 값 계산
  const hours = Math.floor(estimatedTime / 60);
  const minutes = estimatedTime % 60;
  const formattedTime =
    estimatedTime === 0
      ? "최소 시간"
      : estimatedTime === 480
      ? "약 8시간 이상"
      : `${hours ? `${hours}시간` : ""} ${minutes ? `${minutes}분` : ""}`;

  return (
    <>
      <SliderDisplay
        question="총 소요시간은?"
        calculatedValue={formattedTime} // 수정된 값 사용
      />
      <RangeSlider
        value={estimatedTime} // 상태 값 수정
        onChange={setEstimatedTime} // 슬라이더 값 변경 시 호출
        max={480}
        step={10}
      />
      <SliderLabel minLabel="최소" middleLabel="4시간" maxLabel="8시간" />
    </>
  );
}
