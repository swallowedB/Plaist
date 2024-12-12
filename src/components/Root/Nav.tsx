import FooterNavLink from "../FooterNavLink";
import { useAuthStore } from "../../stores/authStore";
import { useLocation } from "react-router";

export default function Nav() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const location = useLocation();

  const getIcon = (path: string, defaultIcon: string, activeIcon: string) => {
    return location.pathname === path ? activeIcon : defaultIcon;
  };

  return (
    <footer className="relative w-full h-20 bg-transparent backdrop-blur-md border-t shadow-lg border-zinc-200 ">
      <div className="absolute inset-0 flex items-center justify-center">
        <nav className="relative flex items-center justify-around w-full h-full max-w-3xl px-4">
          <FooterNavLink
            to="/category"
            icon={getIcon("/category", "category_icon", "clickcategory_icon")}
            label="카테고리"
          />
          <FooterNavLink
            to="/"
            icon={getIcon("/", "feed_icon", "clickfeed_icon")}
            label="피드"
          />
          <FooterNavLink
            to="/create-course/view-my-course"
            icon={getIcon(
              "/create-course/view-my-course",
              "create_icon",
              "clickcreate_icon"
            )}
            label="코스생성"
          />
          <FooterNavLink
            to={isLoggedIn ? "/my-page" : "/login"}
            icon={getIcon(
              isLoggedIn ? "/my-page" : "/login",
              "mypage_icon",
              "clickmypage_icon"
            )}
            label="마이페이지"
          />
        </nav>
      </div>
    </footer>
  );
}
