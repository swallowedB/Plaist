import { Outlet } from "react-router";

export default function MyCourseLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center min-h-[1200px] h-auto "
    >
      <section className="relative flex justify-center w-[767px] bg-transparent">
        <Outlet />
      </section>
    </div>
  );
}
