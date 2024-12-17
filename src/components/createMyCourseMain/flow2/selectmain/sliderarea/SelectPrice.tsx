import { useSliderStore } from "../../../../../stores/sliderStore";
import SliderDisplay from "./SliderDisplay";
import RangeSlider from "./RangeSlider";
import SliderLabel from "./SliderLabel";

export default function SelectPrice() {
  const { estimatedCost, setEstimatedCost } = useSliderStore();

  const calculatedValue = estimatedCost;
  let displayValue = "";

  // 10,000원 이상이면 '만원' 단위로 표시
  if (calculatedValue >= 10000) {
    const tenThousands = Math.floor(calculatedValue / 10000);
    const thousands = calculatedValue % 10000;
    displayValue =
      thousands === 0
        ? `${tenThousands}만원`
        : `${tenThousands}만 ${Math.floor(thousands / 1000)}천원`;
  } else {
    displayValue = `${calculatedValue}원`; // 그 외의 경우 원 단위로 표시
  }

  // 예외 처리
  if (estimatedCost === 0) {
    displayValue = "1만원 이하";
  } else if (estimatedCost === 2000000) {
    displayValue = "10만원 이상";
  }

  return (
    <>
      <SliderDisplay question="예상 비용은?" calculatedValue={displayValue} />
      <RangeSlider
        value={estimatedCost}
        onChange={setEstimatedCost}
        max={2000000}
        step={10000}
      />
      <SliderLabel
        minLabel="최소"
        middleLabel="10만원"
        maxLabel="20만원 이상"
      />
    </>
  );
}
