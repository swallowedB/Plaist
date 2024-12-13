import ViewMyCourseHeader from "../../components/viewMycourse/ViewMyCourseHeader";
import ViewMyAllCourse from "../../components/viewMycourse/ViewMyAllCourse";
import FixedCreateButton from "../../components/viewMycourse/FixedCreateButton";

export default function CreateCourse() {
  return (
    <>
      {/* <div className="relative flex flex-col items-center h-screen bg-white min-w-[767px] "> */}
      {/* 백그라운드 블러 */}

      <div
        id="relative content-area-container"
        className="relative flex flex-col items-center h-screen min-w-[767px] blurTop"
      >
        <div className="z-10">
          <ViewMyCourseHeader />
          <ViewMyAllCourse />
          <FixedCreateButton />
        </div>
      </div>
    </>
  );
}
