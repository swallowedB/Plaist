import { useState, useEffect } from "react";
import images from "../../assets/images/importImages";
import CreateNewMy from "./../../components/createMyCourseMain/CreateNewMy";

export default function MapView() {
  const [step, setStep] = useState(2);

  useEffect(() => {
    console.log("Step changed: ", step);
  }, [step]);

  const progressImage = images[`progress_bar${step}`] || images.progress_bar1;

  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={progressImage} alt={`Progress bar step ${step}`} />
        </figure>
      </aside>
      <section>
        <CreateNewMy />
      </section>
      {/* 단계 변경 버튼 예시 */}
      <button onClick={() => setStep((prevStep) => Math.min(prevStep + 1, 4))}>
        다음
      </button>
    </div>
  );
}
