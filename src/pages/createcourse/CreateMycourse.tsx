import { useState } from "react";
import images from "../../assets/images/importImages";
import SelectTag from "./SelectTag";
import SelectCourseMain from "./SelectCourseMain";
import ExplainCourse from "./ExpainCourse";
import SucessMyPost from "./SucessMyPost";

export default function CreateMyCourse() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      name: "flow1",
      component: (
        <SelectTag setCurrentStep={setCurrentStep} currentStep={currentStep} />
      ),
    },
    {
      id: 2,
      name: "flow2",
      component: (
        <SelectCourseMain
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ),
    },
    {
      id: 3,
      name: "flow3",
      component: (
        <ExplainCourse
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ),
    },
    { id: 4, name: "flow4", component: <SucessMyPost /> },
  ];

  return (
    <div className="mt-[95px] w-full max-w-lg mb-8">
      {/* 진행률 바 */}
      <aside>
        <figure>
          <img
            src={images[`progress_bar${steps[currentStep].id}`]}
            alt={`Progress bar step ${currentStep + 1}`}
          />
        </figure>
      </aside>

      {/* 단계별 컴포넌트 */}
      <div>{steps[currentStep].component}</div>
    </div>
  );
}
