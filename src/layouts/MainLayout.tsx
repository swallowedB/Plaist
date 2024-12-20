import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center min-h-[1500px] bg-white mb-[750px]"
    >
      <section
        id="main-content-box"
        className="relative flex justify-center w-[100vw] bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
