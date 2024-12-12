import { NavLink } from "react-router";
import images from "../assets/images/importImages";

interface FooterNavLinkProps {
  to: string;
  icon: keyof typeof images;
  label: string;
}

export default function FooterNavLink({ to, icon, label }: FooterNavLinkProps) {
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
