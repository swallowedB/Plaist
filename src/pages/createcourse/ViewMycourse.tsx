import ViewMyCourseHeader from "../../components/viewMycourse/ViewMyCourseHeader";
import ViewMyAllCourse from "../../components/viewMycourse/ViewMyAllCourse";
import FixedCreateButton from "../../components/viewMycourse/FixedCreateButton";
import "../../css/index.css";

export default function CreateCourse() {
  return (
    <div className="flex justify-center">
      <div
        id="relative content-area-container"
        className="flex flex-col h-screen min-w-[767px] items-center"
      >
        <div className="absolute blur-bg-center z-[-1]" />

        <ViewMyCourseHeader />
        <ViewMyAllCourse />
        <FixedCreateButton />
      </div>
    </div>
  );
}
