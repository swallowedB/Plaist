import { Dispatch, SetStateAction } from "react";
import images from "../../../../../assets/images/importImages";

interface AddNewMyCourseButtonProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  currentStep: string;
}

export default function AddNewMyCourseButton({
  setCurrentStep,
  currentStep,
}: AddNewMyCourseButtonProps) {
  return (
    <button
      onClick={() => setCurrentStep("step2.5")}
      className="w-[529px] h-[108px] flex items-center justify-center rounded-[21px] bg-primary-50 border-dashed border-primary-500 mt-[38px]"
    >
      <img src={images.plus_icon} alt="plus-icon" />
    </button>
  );
}
