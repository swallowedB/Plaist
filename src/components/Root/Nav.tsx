import FooterNavLink from "../FooterNavLink";
import { useAuthStore } from "../../stores/authStore";

export default function Nav() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <footer className="relative w-full h-20 bg-white border-t shadow-nav border-zinc-100 ">
      <div className="absolute inset-0 flex items-center justify-center">
        <nav className="relative flex items-center justify-around w-full h-full max-w-3xl px-4">
          <FooterNavLink to="/category" icon="category_icon" label="카테고리" />
          <FooterNavLink to="/" icon="feed_icon" label="피드" />
          <FooterNavLink
            to="/create-course/view-my-course"
            icon="create_icon"
            label="코스생성"
          />
          <FooterNavLink
            to={isLoggedIn ? "/my-page" : "/login"}
            icon="mypage_icon"
            label="마이페이지"
          />
        </nav>
      </div>
    </footer>
  );
}
