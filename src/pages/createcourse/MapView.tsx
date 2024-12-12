import { useState, useEffect } from "react";
import images from "../../assets/images/importImages";
import SearchBar from "../../components/SearchBar.test";

export default function MapView() {
  const [step, setStep] = useState(2);

  useEffect(() => {
    console.log("Step changed: ", step);
  }, [step]);

  // 안전하게 처리하는 방법
  const progressImage = images[`progress_bar${step}`] || images.progress_bar1; // step에 맞는 이미지가 없으면 기본 이미지 사용

  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={progressImage} alt={`Progress bar step ${step}`} />
        </figure>
      </aside>
      <section>
        <h1>첫번째 코스 선택</h1>
        <section>
          <div className="w-96 h-80 rounded-tl-2xl rounded-tr-2xl">
            지도 뷰 들어갈 위치
          </div>
          서치바 <SearchBar />
          <div>검색 결과 렌더링될 위치</div>
        </section>
      </section>
      {/* 단계 변경 버튼 예시 */}
      <button onClick={() => setStep((prevStep) => Math.min(prevStep + 1, 4))}>
        다음
      </button>
    </div>
  );
}
