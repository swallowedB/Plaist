import { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import FooterNavLink from "../components/FooterNavLink";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-col overflow-hidden">
      <header>
        <nav className="flex gap-4 p-4 bg-gray-100 shadow">
          <button
            onClick={handleBack}
            className="flex items-center px-3 py-1 text-gray-700 bg-gray-200 rounded"
          >
            ← 뒤로 가기
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            피드
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            카테고리
          </NavLink>
          <NavLink
            to="/createCourse"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            코스생성
          </NavLink>
          <NavLink
            to="/my-page"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            마이페이지
          </NavLink>
          {/* test */}
          {/* test */}
          {/* test */}
          <NavLink
            to="/channelTest"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            test-채널
          </NavLink>
          <NavLink
            to="/authTest"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            test-권한
          </NavLink>
          <NavLink
            to="/userTest"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            test-유저
          </NavLink>
          <NavLink
            to="/searchTest"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            test-검색
          </NavLink>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children} {/* 자식 컴포넌트를 렌더링 */}
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
