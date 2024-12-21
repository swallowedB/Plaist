import { useState, useEffect } from "react";

import TitleInputField from "./../../components/postEditor/TitleInputField";
import TagDisplay from "./../../components/postEditor/TagDisplay";
import CourseDetailDisplay from "../../components/postEditor/CourseDetailDisplay";
import DescriptionInputField from "../../components/postEditor/DescriptionInputField";
import useImageUpload from "../../hooks/useImageUpload";
import ImageUpLoadField from "./../../components/postEditor/ImageUpLoadField";
import SelectedLocationsDisplay from "./../../components/postEditor/SelectedLocationsDisplay";
import CreateMyCourseFlowButton from "./../../components/createMyCourseMain/CreateMyCourseFlowButton";

export default function ExplainCourse({
  locationObjs,
  withWhom,
  style,
  estimatedTime,
  estimatedCost,
  onNext,
}: ExplainCourseProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const { imagePreview, selectedImage, handleImageUpload } = useImageUpload();

  const handleNextClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }
    setIsSaved(true);
    onNext(title, description, selectedImage);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  return (
    <div className="relative">
      <section className="flex flex-col items-center min-h-screen">
        {!isSaved && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
        )}

        <div
          className={`absolute top-[40px] w-[767px] h-[1000px] bg-white shadow-lg rounded-3xl p-8  z-50 transform transition-all duration-700 ease-in-out ${
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
          <div className="flex justify-between">
            <div className="flex flex-col gap-6 w-[488px]">
              <TitleInputField
                value={title}
                handleTitleChange={handleTitleChange}
              />
              <TagDisplay tags={[...withWhom, ...style]} />
              <CourseDetailDisplay
                estimatedTime={estimatedTime}
                estimatedCost={estimatedCost}
              />
            </div>
            <ImageUpLoadField
              imagePreview={imagePreview}
              handleImageUpload={handleImageUpload}
            />
          </div>

          <DescriptionInputField
            guidanceMessage="내 코스를 임팩트 있게 설명해주세요"
            value={description}
            handleDescriptionChange={handleDescriptionChange}
          />

          <SelectedLocationsDisplay locationObjs={locationObjs} />
          <div className="mt-[90px] text-center">
            <CreateMyCourseFlowButton
              onNext={handleNextClick}
              isCompleteThisPage={!!title.trim() && !!description.trim()}
            >
              저장
            </CreateMyCourseFlowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
