import { useState } from "react";
import images from "../../assets/images/importImages";
import SelectTag from "./SelectTag";
import SelectCourseMain from "./SelectCourseMain";
import ExplainCourse from "./ExpainCourse";
import SucessMyPost from "./SucessMyPost";
import Mapview from "./Mapview";

export default function CreateMyCourse() {
  const [currentStep, setCurrentStep] = useState<string>("step1");

  const steps = [
    {
      id: "step1",
      name: "SelectTag",
      component: (
        <SelectTag setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      id: "step2",
      name: "SelectCourseMain",
      component: (
        <SelectCourseMain
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ),
    },
    {
      id: "step2.5",
      name: "Mapview",
      component: (
        <Mapview setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      id: "step3",
      name: "ExplainCourse",
      component: (
        <ExplainCourse
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ),
    },
    { id: "step4", name: "SucessMyPost", component: <SucessMyPost /> },
  ];

  // progress_bar 이미지 경로 계산
  const getProgressBarImage = () => {
    // 'step' 뒤의 숫자만 추출하고 소수점을 버리고 숫자만 남김
    const stepNumber = parseFloat(
      currentStep.replace("step", "").split(".")[0]
    );
    return images[`progress_bar${stepNumber}`]; // step1, step2, step3 이미지 반환
  };

  return (
    <div className="mt-[95px] max-w-[767px] mb-8 flex flex-col items-center">
      {/* 진행률 바 */}
      <aside>
        <figure>
          <img
            src={getProgressBarImage()}
            alt={`Progress bar ${currentStep}`}
          />
        </figure>
      </aside>

      {/* 단계별 컴포넌트 */}
      <div>{steps.find((step) => step.id === currentStep)?.component}</div>
    </div>
  );
}
