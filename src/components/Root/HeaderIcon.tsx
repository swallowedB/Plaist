import { useCookie } from "../../hooks/useCookie";
import HeaderIconLink from "../HeaderNavLink";

export default function HeaderIcon() {
  const isLoggedIn = useCookie();
  return (
    // 상단바 블러 backdrop-blur-sm
    <header className="fixed top-0 left-0 z-50 w-full h-16 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <nav className="relative flex items-center justify-between w-full h-full max-w-3xl px-4">
          <HeaderIconLink
            to="/"
            icon="playlist_logo"
            className="w-[100px] md:pl-[30px]"
          />
          <div className="flex items-center gap-4 md:pr-[61px]">
            <HeaderIconLink
              to={isLoggedIn ? "/notification" : "/login"}
              icon="notification_icon"
              className="w-[17px] h-[20px]"
            />
            <HeaderIconLink
              to="/"
              icon="hamburger_icon"
              className="w-[24px] h-[24px]"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
