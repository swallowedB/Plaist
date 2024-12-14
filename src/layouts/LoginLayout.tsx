import { Outlet } from "react-router";

export default function BackgroundLayout() {
  return (
    <div
      id="background"
      className="relative flex items-center justify-center h-screen overflow-hidden bg-white "
    >
      <section
        id="main-content-box"
        className="relative flex flex-col items-center w-[100vw] h-[100vh] pt-[192px] "
      >
        <div className="absolute blur-bg-login"/>
        <div className={`
          bg-white/25 w-[501px] h-auto border-2 border-white shadow-default rounded-[25px]
          flex flex-col items-center justify-center absolute z-30 py-[155px] px-[109px]
          `}>
          <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */}
        </div>

      </section>
    </div>
  );
}
