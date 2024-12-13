import { useState } from "react";
import SliderDisplay from "./SliderDisplay";
import RangeSlider from "./RangeSlider";
import SliderGuide from "./SliderGuide";

export default function TotalPriceSelector() {
  const [value, setValue] = useState<number>(10); // 초기 값은 1만원
  const calculatedValue = value * 1000; // 슬라이더 값 계산 (1000단위)

  // SliderDisplay에서 표시할 문구를 동적으로 설정
  let displayValue = `${calculatedValue.toLocaleString()}원`; // 기본 값

  if (value === 0) {
    displayValue = "약 0원 이하"; // 최소값에 도달했을 때
  } else if (value === 200) {
    displayValue = "약 20만원 이상"; // 최대값에 도달했을 때
  }

  return (
    <>
      <SliderDisplay
        question="예상금액은?"
        calculatedValue={displayValue} // 동적으로 표시할 값 전달
      />

      {/* step=1000으로 설정 (1000원 단위로 끊기) */}
      <RangeSlider value={value} onChange={setValue} max={200} step={1} />

      {/* 슬라이더 가이드 표시 (고정된 값으로 설정) */}
      <SliderGuide
        minLabel="약 1만원 이하"
        middleLabel="10만원"
        maxLabel="약 20만원 이상"
      />
    </>
  );
}
