import React from "react";

interface SliderGuideProps {
  minLabel: string;
  middleLabel: string;
  maxLabel: string;
}

const SliderGuide: React.FC<SliderGuideProps> = ({
  minLabel,
  middleLabel,
  maxLabel,
}) => {
  return (
    <div className="w-[529px] flex justify-between mt-[32px] text-sm text-primary-700 font-pretendard">
      <span>{minLabel}</span>
      <span>{middleLabel}</span>
      <span>{maxLabel}</span>
    </div>
  );
};

export default SliderGuide;
