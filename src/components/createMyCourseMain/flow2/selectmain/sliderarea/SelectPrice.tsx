import { useSliderStore } from "../../../../../stores/sliderStore";
import SliderDisplay from "./SliderDisplay";
import RangeSlider from "./RangeSlider";
import SliderLabel from "./SliderLabel";

export default function SelectPrice() {
  const { priceSliderValue, setPriceSliderValue } = useSliderStore();
  // price 값 계산
  const calculatedValue = priceSliderValue * 1000;
  let displayValue = "";
  if (calculatedValue >= 10000) {
    const tenThousands = Math.floor(calculatedValue / 10000);
    const thousands = calculatedValue % 10000;
    displayValue =
      thousands === 0
        ? `${tenThousands}만원`
        : `${tenThousands}만 ${Math.floor(thousands / 1000)}천원`;
  } else {
    displayValue = `${calculatedValue}원`;
  }

  if (priceSliderValue === 0) {
    displayValue = "1만원 이하";
  } else if (priceSliderValue === 200) {
    displayValue = "20만원 이상";
  }
  return (
    <>
      <SliderDisplay question="예상 금액은?" calculatedValue={displayValue} />
      <RangeSlider
        value={priceSliderValue} // 상태 값 수정
        onChange={setPriceSliderValue} // 슬라이더 값 변경 시 호출
        max={200}
        step={10}
      />
      <SliderLabel
        minLabel="1만원 이하"
        middleLabel="10만원"
        maxLabel="20만원 이상"
      />
    </>
  );
}
