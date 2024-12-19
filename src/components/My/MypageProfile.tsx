import { Link } from "react-router";
import profileICon from "../../assets/images/profile_icon.svg";
import { useUserStore } from "../../stores/useInfoStore";
import { useEffect } from "react";

export default function MypageProfile() {
  const { userProfilePic, userInfo, fetchUserInfo } = useUserStore();

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${userProfilePic})` }}
        className="w-[96px] h-[96px] bg-[#f3d0d9] rounded-full shadow-backblue overflow-hidden bg-cover bg-center"
      />
      <nav>
        <Link to="/user-info">
          <img
            className="absolute top-[70px] left-[300px] opacity-80 hover:scale-105 hover:opacity-100
            duration-[0.2s] ease-in-out"
            src={profileICon}
            alt="회원 정보 변경"
          />
        </Link>
      </nav>
      <p className="text-primary-700 text-[24px] font-bold font-pretendard mt-[8px]">
        {userInfo.fullName}
      </p>
      <p className="text-primary-600 text-[14px] font-regular font-pretendard">
        {userInfo.email}
      </p>
    </>
  );
}
