import { useEffect } from "react";
import { useLocation } from "react-router";

export const UseScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("야호")
  }, [pathname]);

  return null
};
