import { useState, useEffect } from "react";
import images from "../../assets/images/importImages";
import { useConvertIcon } from "../../utills/main/convertIcon";
import CreateMyCourseFlowButton from "./../../components/createMyCourseMain/CreateMyCourseFlowButton";
import useBackWithHistory from "../../hooks/useBackWithHistory";

// props로 setCurrentStep을 받기 위한 타입 정의
interface ExplainCourseProps {
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
    locationImage?: string;
  }[];
  withWhom: string[];
  styles: string[];
  estimatedTime: number;
  estimatedCost: number;
  onNext: (
    courseTitle: string,
    courseDescription: string,
    image: string
  ) => void; // 다음 단계로 이동 시 호출할 함수
  onBack: () => void; // 이전 단계로 이동 시 호출할 함수
}

export default function ExplainCourse({
  locationObjs,
  withWhom,
  styles,
  estimatedTime,
  estimatedCost,
  onNext,
  onBack,
}: ExplainCourseProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // 원의 갯수
  const categories = locationObjs.map((obj) => obj.locationCategory);
  const [courseCount, setCourseCount] = useState(categories.length);
  const tags: string[] = [...withWhom, ...styles];

  // 이미지 업로드
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // 가짜 데이터
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LpapIl8DITfz4_Y2z7pqs7FknPkjReAZCg&s";

  const handleNextClick = () => {
    if (!imagePreview) return;
    onNext(title, description, imagePreview);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  useBackWithHistory(onBack);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* 주변 어두운 배경 (저장 후 배경을 원래대로 변경) */}
      {!isSaved && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* 메인 컨텐츠 */}
      <div
        className={`w-[767px] h-[1000px] bg-white shadow-lg rounded-3xl p-8 relative z-50 transform transition-all duration-700 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[1500px]"
        }`}
        style={{
          paddingLeft: "60px",
          paddingTop: "82px",
          paddingRight: "59px",
        }}
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
              {tags.map((item, index) => (
                <li
                  key={index}
                  className="w-[72px] h-[34px] text-[14px] rounded-[30px] border-2 border-primary-600 font-pretendard text-center flex items-center justify-center"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* 이동시간/예상금액 */}
            <div className="flex gap-8 text-sm text-primary-600 font-pretendard">
              <div className="flex items-center gap-2">
                <img
                  src={images.course_estimated_time_icon}
                  alt="이동시간 아이콘"
                  className="w-4 h-4"
                />
                <span>
                  이동시간{" "}
                  {(estimatedTime / 60).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 1,
                  })}
                  시간
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={images.course_budget_icon}
                  alt="예상금액 아이콘"
                  className="w-4 h-4"
                />
                <span>
                  예상금액{" "}
                  {estimatedCost.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 1,
                  })}
                  원
                </span>
              </div>
            </div>
          </div>

          {/* 이미지 업로드 */}
          <div className="absolute top-[20px] right-0 w-[136px] h-[136px] bg-primary-50 rounded-lg flex flex-col items-center justify-center border bg-center bg-cover">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="업로드된 이미지 미리보기"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <img
                src={images.plus_icon}
                alt="플러스 아이콘"
                className="w-4 h-4"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
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
          <div className="relative flex items-center justify-center gap-[56px]">
            {/* 원들을 유동적으로 렌더링 */}
            {locationObjs.map((location, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {/* 아이콘 원 */}
                  <div
                    className="w-[120px] h-[120px] bg-primary-200 rounded-full flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${useConvertIcon(
                        location.locationCategory
                      )})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* 텍스트 */}
                  <span className="font-pretendard text-sm text-primary-600 font-semibold text-center mt-2">
                    {location.locationName}
                  </span>
                </div>
              );
            })}

            {/* 가로줄 */}
            <div
              className="absolute top-1/2 border-t-2 border-dashed border-primary-600 transform -translate-y-1/2 z-[-1]"
              style={{
                width: `${120 * courseCount + 56 * (courseCount - 1)}px`, // 원의 개수에 맞춰 가로줄의 길이 계산
                left: `calc(50% - ${
                  (120 * courseCount) / 2 + (56 * (courseCount - 1)) / 2
                }px)`, // 원의 중앙에 맞춰 가로줄 위치 조정
              }}
            ></div>
          </div>
        </div>

        {/* 저장 버튼 */}
        <div className="mt-10 text-center">
          <CreateMyCourseFlowButton
            onNext={handleNextClick}
            isCompleteThisPage={
              title.trim() !== "" && description.trim() !== ""
            }
          >
            <button
              className={`w-full h-full text-white rounded-[30px] ${
                title.trim() !== "" && description.trim() !== ""
                  ? "bg-primary-600 cursor-pointer"
                  : "bg-primary-200 cursor-not-allowed"
              }`}
              disabled={title.trim() === "" || description.trim() === ""}
            >
              저장
            </button>
          </CreateMyCourseFlowButton>
        </div>
      </div>
    </div>
  );
}
