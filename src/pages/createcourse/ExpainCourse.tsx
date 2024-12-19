import { useState, useEffect } from "react";
import images from "../../assets/images/importImages";
import { useConvertIcon } from "../../utills/main/convertIcon";
import CreateMyCourseFlowButton from "./../../components/createMyCourseMain/CreateMyCourseFlowButton";

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
    image: File | null
  ) => void;
}

export default function ExplainCourse({
  locationObjs,
  withWhom,
  styles,
  estimatedTime,
  estimatedCost,
  onNext,
}: ExplainCourseProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        setSelectedImage(file); // 파일 데이터를 상태에 저장

        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          setImagePreview(base64String); // 이미지 미리보기 설정
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  };

  const handleNextClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", selectedImage);

    onNext(title, description, selectedImage);
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);


  return (
    <div className="flex flex-col items-center min-h-screen">
      {!isSaved && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

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
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
              className="w-[299px] h-[36px] text-2xl font-pretendard text-custom-black font-semibold p-0 placeholder-gray-400 focus:outline-none"
            />

            <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[12px]">
              {[...withWhom, ...styles].map((item, index) => (
                <li
                  key={index}
                  className="w-[72px] h-[34px] text-[14px] rounded-[30px] border-2 border-primary-600 font-pretendard text-center flex items-center justify-center"
                >
                  {item}
                </li>
              ))}
            </ul>

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

          <div
            className="absolute top-[20px] right-0 w-[136px] h-[136px] bg-primary-50 rounded-lg flex flex-col items-center justify-center border bg-center bg-cover cursor-pointer"
            onClick={handleImageUpload}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="업로드된 이미지 미리보기"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <img src={images.plus_icon} alt="플러스 아이콘" className="w-4 h-4" />
            )}
          </div>
        </div>

        <div className="mt-6 text-base font-semibold text-custom-black font-pretendard">
          내 코스를 임팩트 있게 소개해주세요.
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="font-pretendard text-custom-black w-[645px] h-[83px] rounded-lg p-4 text-sm focus:outline-none resize-none"
          style={{ backgroundColor: "rgba(180, 184, 201, 0.2)" }}
        />

        <div className="mt-10">
          <h3 className="text-custom-black font-semibold mb-4 text-base">
            선택한 코스
          </h3>
          <div className="relative flex items-center justify-center gap-[56px]">
            {locationObjs.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
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
                <span className="font-pretendard text-sm text-primary-600 font-semibold text-center mt-2">
                  {location.locationName}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <CreateMyCourseFlowButton
            onNext={handleNextClick}
            isCompleteThisPage={!!title.trim() && !!description.trim()}
          >
            저장
          </CreateMyCourseFlowButton>
        </div>
      </div>
    </div>
  );
}
