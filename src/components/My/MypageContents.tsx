import { useNavigate } from "react-router";

import MypageCategoryTap from "./MypageCategoryTap";
import MypageProfile from "./MypageProfile";

import { postLogout } from "../../api/api";
import onLogin from "../../assets/images/onLogout.svg";
import offLogin from "../../assets/images/offLogout.svg";
import { useUserStore } from "../../stores/useInfoStore";

export default function MypageContents() {
  const navigate = useNavigate();
  const { logout } = useUserStore();

  const handleLogout = async () => {
    try {
      await postLogout(navigate);
      logout();
    } catch (error) {
      console.error("logout error:", error);
    }
  };

  return (
    <div className={`absolute top-[117px] pb-[150px]`}>
      <div
        className={`flex flex-col items-center w-[647px] h-full bg-primary-300/15 rounded-[25px] 
            border-2 border-white z-10 shadow-default py-20 min-h-[960px]`}
      >
        {/*창 안의 요소*/}
        <div className="relative ">
          <div
            className={`absolute top-[-55px] left-[545px] group hover:bg-white
            flex flex-col items-center justify-center bg-primary-700/10 rounded-full w-[30px] h-[30px]`}
            onClick={handleLogout}
          >
            <img src={offLogin} alt="로그아웃" className="group-hover:hidden" />
            <img
              src={onLogin}
              alt="로그아웃"
              className="hidden group-hover:block"
            />
          </div>

          <div className="relative flex flex-col items-center mt-[35px] h-full w-[555px]">
            {/*프로필 요소*/}
            <MypageProfile />

            {/* 마이페이지 - 카테고리 탭 */}
            <MypageCategoryTap />
          </div>
        </div>
      </div>
    </div>
  );
}
