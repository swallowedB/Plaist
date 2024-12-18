import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./CourseEditor.module.css";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import AddedCoursebox from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddNewMyCourseButton";
import SliderBox from "../../components/createMyCourseMain/flow2/selectmain/sliderarea/SliderBox";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useSliderStore } from "./../../stores/sliderStore";

interface LocationObj {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: number;
}

interface SelectCourseMainProps {
  locationObjs: LocationObj[];
  locationObjDelete: (id: number) => void;
  onPlus: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[]
  ) => void;
  onNext: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[],
    channelId: string
  ) => void;
  onBack: () => void;
}

export default function SelectCourseMain({
  locationObjs,
  locationObjDelete,
  onPlus,
  onNext,
  onBack,
}: SelectCourseMainProps) {
  const [courseBoxes, setCourseBoxes] = useState(locationObjs);

  const [isCompletedThisPage, setIsCompletedThisPage] = useState(false);
  const handleDelete = (id: number) => {
    setCourseBoxes((prev) => prev.filter((_, index) => index !== id));
    locationObjDelete(id);
  };
  const { estimatedTime, estimatedCost } = useSliderStore();
  const handlePlus = () => {
    onPlus(estimatedTime, estimatedCost, locationObjs);
  };
  const channelId = "121244"; // 타입 애러때문에 넣어둠
  const handleNext = () => {
    onNext(estimatedTime, estimatedCost, locationObjs, channelId);
  };

  useEffect(() => {
    if (courseBoxes.length > 0 && estimatedTime > 0 && estimatedCost > 0) {
      setIsCompletedThisPage(true);
    } else {
      setIsCompletedThisPage(false);
    }
  }, [courseBoxes, estimatedTime, estimatedCost]);

  useEffect(() => {
    const handlePopState = () => {
      onBack();
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onBack]);

  return (
    <div>
      <PostingGuideTitle titleText="나만의 코스를 생성" />

      <section
        id="course-editor"
        className={twMerge(styles.courseEditorContainer)}
      >
        {courseBoxes.map((box, index) => (
          <AddedCoursebox
            key={Math.random()}
            locationName={box.locationName}
            index={index}
            locationAddress={box.locationAddress}
            locationCategory={box.locationCategory}
            onDelete={handleDelete}
          />
        ))}
        <AddNewMyCourseButton onPlus={handlePlus} />
      </section>

      <div
        id="course-data-selector"
        className="flex flex-col items-center mb-[149px]"
      >
        <SliderBox />
      </div>

      <div className="flex flex-col items-center justify-center mb-[100px]">
        <CreateMyCourseFlowButton
          onNext={handleNext}
          isCompleteThisPage={isCompletedThisPage}
        >
          완료
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
