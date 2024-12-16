import { Outlet } from "react-router";

export default function CourseContentLayout() {
  return (
    <div>
      <div className="h-[64px] bg-transparent w-screen"></div>
      <div className="flex flex-col items-center max-w-[767px] min-h-[1800px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
