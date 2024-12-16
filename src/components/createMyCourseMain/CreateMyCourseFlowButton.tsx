import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 import 합니다.

interface CreateMyCourseFlowButtonProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  currentStep: string;
  isCompleteThisPage: boolean;
  children: React.ReactNode;
}

export default function CreateMyCourseFlowButton({
  setCurrentStep,
  currentStep,
  isCompleteThisPage,
  children,
}: CreateMyCourseFlowButtonProps) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (isCompleteThisPage) {
      if (currentStep === "step1") {
        setCurrentStep("step2");
      } else if (currentStep === "step2") {
        setCurrentStep("step3");
      } else if (currentStep === "step2.5") {
        setCurrentStep("step2");
      } else if (currentStep === "step3") {
        setCurrentStep("step4");
      } else if (currentStep === "step4") {
        navigate("/");
      }
    }
  };

  return (
    <button
      onClick={handleNext}
      disabled={!isCompleteThisPage}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white mb-[] ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      }`}
    >
      {children}
    </button>
  );
}
