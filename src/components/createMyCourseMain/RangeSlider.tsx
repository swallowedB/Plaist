import { useEffect, useRef } from "react";
import "./RangeSider.css";
type RangeSliderProps = {
  value: number; // 현재 슬라이더 값
  onChange: (value: number) => void; // 값 변경 핸들러
  max: number; // 최대값을 동적으로 받음
  step: number; // 슬라이더의 step 값을 외부에서 받음
};

const RangeSlider = ({ value, onChange, max, step }: RangeSliderProps) => {
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeRef.current) {
      // 현재 슬라이더 값을 기준으로 백분율 계산
      const percentage = (value / max) * 100; // 최대값을 동적으로 적용
      rangeRef.current.style.setProperty("--slider-value", `${percentage}%`);
    }
  }, [value, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value)); // 상위 컴포넌트에 값 전달
  };

  return (
    <div className="w-[476px] flex justify-center mt-4 slidecontainer font-pretendard">
      <input
        type="range"
        min="0"
        max={max} // 동적으로 max 값 적용
        value={value}
        onChange={handleChange} // 값 변경 핸들러
        step={step} // step을 외부에서 전달받아 처리
        ref={rangeRef} // 커스텀 스타일 적용을 위해 ref 연결
        className="w-full h-2 rounded-lg focus:outline-none"
        id="myRange"
      />
    </div>
  );
};

export default RangeSlider;
