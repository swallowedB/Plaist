import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterNavLink from "../components/FooterNavLink";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-col overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */}
      </main>
      {/* Footer */}
      <footer className="w-full h-20 bg-white shadow-[0_-4px_10px_0_rgba(0,0,0,0.1)] border-t border-zinc-100">
        <nav className="flex justify-around items-center h-full px-4">
          <FooterNavLink to="/category" icon="category_icon" label="카테고리" />
          <FooterNavLink to="/" icon="feed_icon" label="피드" />
          <FooterNavLink
            to="/createCourse"
            icon="create_icon"
            label="코스생성"
          />
          <FooterNavLink
            to={isLoggedIn ? "/my-page" : "/login"}
            icon="mypage_icon"
            label="마이페이지"
          />
        </nav>
      </footer>
    </div>
  );
}
