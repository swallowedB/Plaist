import { NavLink, useLocation } from "react-router";

import images from "../assets/images/importImages";

interface FooterNavLinkProps {
  to: string;
  icon: keyof typeof images;
  label: string;
}

export default function FooterNavLink({ to, icon, label }: FooterNavLinkProps) {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        // /login 경로에서는 항상 기본 색상 유지
        if (location.pathname === "/login") {
          return "text-xs text-custom-icon font-pretendard font-medium";
        }

        // 그 외 경로에서는 활성화 여부에 따라 색상 변경
        return isActive
          ? "text-xs text-primary-600 font-pretendard font-medium"
          : "text-xs text-custom-icon font-pretendard font-medium";
      }}
    >
      <figure className="flex flex-col items-center justify-center">
        <img
          src={images[icon]}
          alt={`${label} 아이콘`}
          className="w-6 h-6 mb-1"
        />
        <figcaption>{label}</figcaption>
      </figure>
    </NavLink>
  );
}
