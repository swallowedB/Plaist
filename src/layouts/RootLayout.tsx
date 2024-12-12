import { Outlet } from "react-router";
import Nav from "../components/Root/Nav";

export default function RootLayout() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-white mx-auto">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */}
      </main>
      {/* Footer */}
      <Nav />
    </div>
  );
}
