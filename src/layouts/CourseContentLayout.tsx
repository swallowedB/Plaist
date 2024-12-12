import { Outlet } from "react-router";

export default function CourseContentLayout() {
  return (
    <div>
      <div className="h-[64px] bg-white w-screen"></div>
      <div className="flex flex-col items-center justify-center bg-red-50 max-w-[767px] mx-auto h-[1800px]">
        <div>CourseContentLayout</div>
        <Outlet />
      </div>
    </div>
  );
}
