import { useEffect } from "react";
import { useNavigate } from "react-router";

import UserInfoNav from "./userInfo/UserInfoNav";
import UserInfoUpdate from "./userInfo/UserInfoUpdate";
import UserInfoProfile from "./userInfo/UserInfoProfile";

import { postLogout } from "../../api/api";
import { useCookie } from "../../hooks/useCookie";
import { useUserStore } from "../../stores/useInfoStore";

export default function MypageUserInfo() {
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

  const isLoggedIn = useCookie();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?page=my-page");
    }
  }, []);
  return (
    <div className={`absolute z-[100] top-[117px]`}>
      <div
        className={`flex flex-col items-center w-[647px] bg-primary-400/25 rounded-[25px] 
            border-2 border-white z-10 shadow-default h-[900px]`}
      >
        {/*창 안의 요소*/}
        <div className="flex flex-col items-center mt-[43px] h-full">
          {/* 프로필 수정 상단네비 */}
          <UserInfoNav />
          {/* 프로필 사진 및 이름 */}
          <UserInfoProfile />

          {/* 사용자 정보 변경 */}
          <div className="mt-[58px] mb-[40px]">
            <UserInfoUpdate />
          </div>

          {/*로그아웃 버튼*/}
          <button
            className="font-pretendard font-medium text-primary-700 text-[13px]"
            onClick={handleLogout}
          >
            {" "}
            로그아웃{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
