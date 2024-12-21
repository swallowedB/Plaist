import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center h-auto bg-white "
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
