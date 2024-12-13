import { Outlet } from "react-router";

export default function ViewMycourse() {
  return (
    <div
      id="background"
      className="relative flex items-center justify-center bg-white mt-[95px]"
    >
      <section
        id="main-content-box"
        className="relative flex justify-center w-[100vw] h-[100vh]  bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
