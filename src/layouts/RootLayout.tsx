import { Outlet } from "react-router";
import Nav from "../components/Root/Nav";
import { useAuthStore } from "../stores/authStore";

export default function RootLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-white">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto max-w-[767px] mx-auto no-scrollbar">
        <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */}
      </main>
      {/* Footer */}
      <Nav />
    </div>
  );
}
