import { Outlet } from "react-router";
import Blur from "./Blur";
import Glass from "../components/Glass";

export default function BackgroundLayout() {
  return (
    <div
      id="background"
      className="relative flex justify-center items-center h-screen bg-white overflow-hidden"
    >
      <Blur />
      <section
        id="main-content-box"
        className="relative flex justify-center items-center w-[100vw] h-[100vh]  bg-transparent"
      >
        <Glass>
          <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */}
        </Glass>
      </section>
    </div>
  );
}
