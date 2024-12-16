import { useState, useEffect } from "react";
import images from "../../assets/images/importImages";
import CreateMyCourseFlowButton from "./../../components/createMyCourseMain/CreateMyCourseFlowButton";

// props로 setCurrentStep을 받기 위한 타입 정의
interface ExplainCourseProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number; // currentStep을 부모 컴포넌트에서 전달 받도록 수정
}

export default function ExplainCourse({
  setCurrentStep,
  currentStep,
}: ExplainCourseProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const categories: string[] = ["기념일", "생일", "로맨틱"];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsVisible(false), 100); // 0.1초 후 메인 컨텐츠 숨기기
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // 0.1초 후 메인 컨텐츠 나타나기
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* 주변 어두운 배경 (저장 후 배경을 원래대로 변경) */}
      {!isSaved && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* 메인 컨텐츠 (위에서 아래로 나타나는 애니메이션) */}
      <div
        className={`w-[767px] h-[1000px] bg-white shadow-lg rounded-3xl p-8 relative z-50 transform transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          paddingLeft: "60px",
          paddingTop: "82px",
          paddingRight: "59px",
        }} // 패딩값 추가
      >
        <div className="flex justify-between relative">
          <div className="flex flex-col gap-6">
            {/* 제목 입력 */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
              className="w-[299px] h-[36px] text-2xl font-pretendard text-custom-black font-semibold p-0 placeholder-gray-400 focus:outline-none"
            />

            {/* 카테고리 */}
            <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[12px]">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="w-[72px] h-[34px] text-[14px] rounded-[30px] border-2 border-primary-600 font-pretendard text-center flex items-center justify-center"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* 이동시간/예상금액 */}
            <div className="flex gap-8 text-sm text-primary-600">
              <div className="flex items-center gap-2">
                <img
                  src={images.course_budget_icon}
                  alt="이동시간 아이콘"
                  className="w-4 h-4"
                />
                <span>이동시간: 1-2시간</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={images.course_budget_icon}
                  alt="예상금액 아이콘"
                  className="w-4 h-4"
                />
                <span>예상금액: 2-3만원</span>
              </div>
            </div>
          </div>

          {/* 이미지 업로드 */}
          <div className="absolute top-[20px] right-0 w-[136px] h-[136px] bg-primary-50 rounded-lg flex items-center justify-center border">
            <img
              src={images.plus_icon}
              alt="플러스 아이콘"
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* 코스 설명칸 */}
        <div className="mt-6 text-base font-semibold text-custom-black font-pretendard">
          내 코스를 임팩트 있게 소개해주세요.
        </div>
        <div className="mt-2">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="font-pretendard text-custom-black w-[645px] h-[83px] rounded-lg p-4 text-sm focus:outline-none resize-none"
            style={{ backgroundColor: "rgba(180, 184, 201, 0.2)" }}
          />
        </div>

        {/* 선택한 코스 */}
        <div className="mt-10">
          <h3 className="text-custom-black font-semibold mb-4 text-base">
            선택한 코스
          </h3>
          <div className="flex gap-4">
            <img src={images.course_selected_img} alt="선택한 코스" />
          </div>
        </div>

        {/* 저장 버튼 */}
        <div className="mt-10 text-center">
          <CreateMyCourseFlowButton
            isCompleteThisPage={true} // 페이지 완료 여부
            isLastStep={false} // 마지막 단계
            setCurrentStep={setCurrentStep} // 단계 변경 함수
            currentStep={currentStep} // 현재 단계
          >
            <button onClick={handleSave}>저장</button>
          </CreateMyCourseFlowButton>
        </div>
      </div>
    </div>
  );
}
