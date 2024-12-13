import { useSliderStore } from "../../stores/sliderStore";
import SliderDisplay from "./SliderDisplay";
import RangeSlider from "./RangeSlider";
import SliderLabel from "./SliderLabel";
export default function SelectDuration() {
  const { durationSliderValue, setDurationSliderValue } = useSliderStore();
  // duration 값 계산
  const hours = Math.floor(durationSliderValue / 60);
  const minutes = durationSliderValue % 60;
  const formattedTime =
    durationSliderValue === 0
      ? "최소 시간"
      : durationSliderValue === 480
      ? "약 8시간 이상"
      : `${hours ? `${hours}시간` : ""} ${minutes ? `${minutes}분` : ""}`;

  return (
    <>
      <SliderDisplay
        question="총 소요시간은?"
        calculatedValue={formattedTime} // 수정된 값 사용
      />
      <RangeSlider
        value={durationSliderValue} // 상태 값 수정
        onChange={setDurationSliderValue} // 슬라이더 값 변경 시 호출
        max={480}
        step={10}
      />
      <SliderLabel minLabel="최소" middleLabel="4시간" maxLabel="8시간" />
    </>
  );
}
