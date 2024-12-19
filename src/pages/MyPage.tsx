import "../css/index.css";
import MypageContents from "../components/My/MypageContents";
import { useCookie } from "../hooks/useCookie";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function MyPage() {
  const isLoggedIn = useCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?page=my-page");
    }
  }, []);
  return (
    <>
      <div className="relative flex flex-col items-center min-h-[1000px] mx-auto mb-[200px]">
        {/* blur blue*/}
        <div className="absolute blur-bg-center z-[-10]" />

        {/*glass 창 */}
        <MypageContents />
      </div>
    </>
  );
}
