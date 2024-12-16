import ViewMyCourseHeader from "../../components/viewMycourse/ViewMyCourseHeader";
import ViewMyAllCourse from "../../components/viewMycourse/ViewMyAllCourse";
import FixedCreateButton from "../../components/viewMycourse/FixedCreateButton";
import "../../css/index.css";

export default function CreateCourse() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute blur-bg-center" />
      <div
        id="relative content-area-container"
        className="absolute flex flex-col items-center h-screen min-w-[767px] z-30 mt-[166px]"
      >
        <div className="z-10">
          <ViewMyCourseHeader />
          <ViewMyAllCourse />
          <FixedCreateButton />
        </div>
      </div>
    </div>
  );
}
