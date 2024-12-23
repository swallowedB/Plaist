import { NavLink } from "react-router";

import images from "../assets/images/importImages";

interface HeaderNavIconProps {
  to: string;
  icon: keyof typeof images;
  className?: string;
}

export default function HeaderIconLink({
  to,
  icon,
  className,
}: HeaderNavIconProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-xs text-primary-600 font-pretendard font-medium"
          : "text-xs text-custom-icon font-pretendard font-medium"
      }
    >
      <figure className="flex flex-col items-center justify-center">
        <img src={images[icon]} className={`w-6 h-6 mb-1 ${className}`} />
      </figure>
    </NavLink>
  );
}
