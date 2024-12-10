import { Outlet } from "react-router";
import Blur from "./Blur";

export default function MainLayout() {
  return (
    <div
      id="background"
      className="flex flex-col justify-center overflow-hidden bg-white "
    >
      <Blur />
      <section
        id="main-content-box"
        className="flex justify-center mx-auto max-w-[767px] 
        min-h-screen overflow-auto scrollbar-hide bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
