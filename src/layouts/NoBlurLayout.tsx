import Blur from "./Blur";
import { Outlet } from "react-router-dom";

export default function BackgroundLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center items-center h-screen bg-white overflow-hidden"
    >
      <Blur />
      <section
        id="main-content-box"
        className="relative flex justify-center items-center w-[90vw] h-[90vh] max-w-[767px] max-h-[1080px] bg-transparent"
      >
        <Outlet />
      </section>
    </div>
  );
}
