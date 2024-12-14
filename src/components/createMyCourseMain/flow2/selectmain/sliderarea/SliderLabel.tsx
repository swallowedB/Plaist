import React from "react";

interface SliderLabelProps {
  minLabel: string;
  middleLabel: string;
  maxLabel: string;
}

const SliderGuide: React.FC<SliderLabelProps> = ({
  minLabel,
  middleLabel,
  maxLabel,
}) => {
  return (
    <div className="w-[529px] grid grid-cols-3 gap-0 mt-[32px] text-sm text-primary-700 font-pretendard">
      <div className="text-left">{minLabel}</div>
      <div className="text-center">{middleLabel}</div>
      <div className="text-right">{maxLabel}</div>
    </div>
  );
};

export default SliderGuide;
