import { useState } from "react";
import SliderDisplay from "./SliderDisplay";
import RangeSlider from "./RangeSlider";
import SliderGuide from "./SliderGuide";

export default function TotalDurationSelector() {
  const [value, setValue] = useState<number>(100);

  const calculatedValue = value;
  // 시간 변환
  const hours = Math.floor(calculatedValue / 60); // 시 계산
  const minutes = calculatedValue % 60; // 분 계산

  // 분이 0일 경우 "0분"을 생략하고, 그렇지 않으면 표시
  const formattedTime = `${hours}시간 ${minutes ? `${minutes}분` : ""}`;

  return (
    <>
      <SliderDisplay
        question="총 소요시간은?"
        calculatedValue={formattedTime}
      />

      {/* step=10으로 설정 */}
      <RangeSlider value={value} onChange={setValue} max={480} step={10} />

      {/* 슬라이더 가이드 표시 */}
      <SliderGuide minLabel="최소" middleLabel="4시간" maxLabel="8시간" />
    </>
  );
}
