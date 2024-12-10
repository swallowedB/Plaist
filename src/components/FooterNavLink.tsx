import { NavLink } from "react-router";
import images from "../utils/importImages";

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
          ? "text-xs text-blue-600 font-bold"
          : "text-xs text-zinc-800 font-medium"
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
