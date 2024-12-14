import { useSliderStore } from "../../stores/sliderStore";
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
        ? `${tenThousands}만 원`
        : `${tenThousands}만 ${Math.floor(thousands / 1000)}천원`;
  } else {
    displayValue = `${calculatedValue}원`;
  }

  if (priceSliderValue === 0) {
    displayValue = "0원 데이트";
  } else if (priceSliderValue === 200) {
    displayValue = "약 20만 원 이상";
  }
  return (
    <>
      <SliderDisplay question="예상금액은?" calculatedValue={displayValue} />
      <RangeSlider
        value={priceSliderValue} // 상태 값 수정
        onChange={setPriceSliderValue} // 슬라이더 값 변경 시 호출
        max={200}
        step={1}
      />
      <SliderLabel
        minLabel="0원"
        middleLabel="10만 원"
        maxLabel="20만 원 이상"
      />
    </>
  );
}
