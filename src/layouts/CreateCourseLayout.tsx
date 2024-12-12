import { Outlet } from "react-router";
import Blur from "./Blur";

export default function MainLayout() {
  return (
    <div
      id="background"
      className="flex flex-col justify-center overflow-hidden bg-primary-400 "
    >
      <Blur />
      <section
        id="main-content-box"
        className="flex justify-center mx-auto 
         overflow-auto scrollbar-hide bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
