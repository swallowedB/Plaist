import { Outlet } from "react-router";

export default function ViewMycourse() {
  return (
    <div
      id="background"
      className="relative flex items-center justify-center bg-white"
    >
      <section
        id="main-content-box"
        className="relative flex justify-center w-[767px] bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
