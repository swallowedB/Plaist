import { useNavigate } from "react-router";

interface CreateMyCourseFlowButtonProps {
  isCompleteThisPage: boolean;
  isLastStep: boolean;
  setCurrentStep?: (step: number) => void;
  children: React.ReactNode;
  currentStep: number;
}

export default function CreateMyCourseFlowButton({
  isCompleteThisPage,
  isLastStep,
  setCurrentStep,
  children,
  currentStep,
}: CreateMyCourseFlowButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isCompleteThisPage) {
      if (isLastStep) {
        navigate("/"); // 마지막 단계면 홈으로 이동
      } else {
        setCurrentStep?.(currentStep + 1); // 다음 단계로 이동
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      }`}
      disabled={!isCompleteThisPage}
    >
      {children}
    </button>
  );
}
