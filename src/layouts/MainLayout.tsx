import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center min-h-[2000px] bg-white mb-[250px]"
    >
      <section
        id="main-content-box"
        className="relative flex justify-center w-[100vw] min-h-[1800px] bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
