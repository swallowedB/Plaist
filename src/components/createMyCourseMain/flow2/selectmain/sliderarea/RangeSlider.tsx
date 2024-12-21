import { useEffect, useRef } from "react";
import "./RangeSider.css";
type RangeSliderProps = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  step: number;
};

const RangeSlider = ({ value, onChange, max, step }: RangeSliderProps) => {
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeRef.current) {
      const percentage = (value / max) * 100;
      rangeRef.current.style.setProperty("--slider-value", `${percentage}%`);
    }
  }, [value, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value)); // 상위 컴포넌트에 값 전달
  };

  return (
    <div className="w-[500px] flex justify-center mt-4 slidecontainer font-pretendard">
      <input
        type="range"
        max={max}
        value={value}
        onChange={handleChange}
        step={step}
        ref={rangeRef}
        className="w-full h-2 rounded-lg focus:outline-none"
        id="myRange"
      />
    </div>
  );
};

export default RangeSlider;
