import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./CourseEditor.module.css";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import AddedCoursebox from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddedCoursebox";
import AddNewMyCourseButton from "../../components/createMyCourseMain/flow2/selectmain/addcoursearea/AddNewMyCourseButton";
import SliderBox from "../../components/createMyCourseMain/flow2/selectmain/sliderarea/SliderBox";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useSliderStore } from "./../../stores/sliderStore";

export default function SelectCourseMain({
  locationObjs,
  locationObjDelete,
  onPlus,
  onNext,
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

  const getchannelIdList = () => {
    // locationObjs에서 locationAddress만 골라서 새로운 배열을 만듦
    const addressList = locationObjs.map(
      (location) => location.locationAddress
    );
    const channelList = addressList.map((address) => {
      switch (address.slice(0, 2)) {
        case "서울":
          return "675bef7e09a5266ae560fdd2";
        case "경기":
          return "675bef8b09a5266ae560fdd6";
        case "인천":
          return "675befd809a5266ae560fddd";
        case "강원":
          return "675befdf09a5266ae560fde1";
        case "충남":
          return "675befe909a5266ae560fde5";
        case "대전":
          return "675befee09a5266ae560fde9";
        case "충북":
          return "675beffa09a5266ae560fded";
        case "세종":
          return "675bf00109a5266ae560fdf1";
        case "부산":
          return "675bf00709a5266ae560fdf5";
        case "울산":
          return "675bf00b09a5266ae560fdf9";
        case "대구":
          return "675bf01109a5266ae560fdfd";
        case "경북":
          return "675bf01709a5266ae560fe01";
        case "경남":
          return "675bf01a09a5266ae560fe05";
        case "전남":
          return "675bf02109a5266ae560fe09";
        case "광주":
          return "675bf02b09a5266ae560fe0d";
        case "전북":
          return "675bf03009a5266ae560fe13";
        case "제주":
          return "675bf03409a5266ae560fe17";
        default:
          return "";
      }
    });
    console.log(channelList);
    return channelList;
  };

  const channelIdList = getchannelIdList();

  const handleNext = () => {
    onNext(estimatedTime, estimatedCost, locationObjs, channelIdList);
  };

  useEffect(() => {
    if (courseBoxes.length > 0 && estimatedTime > 0 && estimatedCost > 0) {
      setIsCompletedThisPage(true);
    } else {
      setIsCompletedThisPage(false);
    }
  }, [courseBoxes, estimatedTime, estimatedCost]);

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
