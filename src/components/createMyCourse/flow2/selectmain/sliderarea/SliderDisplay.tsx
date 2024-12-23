type SliderDisplayProps = {
  question: string;
  calculatedValue: string;
};

const SliderDisplay = ({ question, calculatedValue }: SliderDisplayProps) => {
  return (
    <div className="w-[539px] h-[10px] mt-[81px] mb-[49px] flex justify-start font-pretendard">
      <p className="leading-[10px]   mr-[9px] text-[#7D848D] font-semiBold text-[21px]">
        {question}
      </p>
      <p
        id="input-transformer"
        className="leading-[10px] font-medium text-[16px] text-primary-500"
      >
        {calculatedValue}
      </p>
    </div>
  );
};

export default SliderDisplay;
