import { Link } from "react-router";
import profileICon from "../../../assets/images/profile_icon.svg";

export default function MypageProfile() {
  return (
    <>
      <div className="w-[96px] h-[96px] bg-primary-400 rounded-full" />
      <nav>
        <Link to="/user-info">
          <img
            className="absolute top-[315px] left-[400px]"
            src={profileICon}
            alt="프로필 수정 아이콘"
          />
        </Link>
      </nav>
      <p className="text-primary-700 text-[24px] font-bold font-pretendard mt-[8px]">
        Timmy
      </p>
      <p className="text-primary-400 text-[14px] font-regular font-pretendard">
        Timmy2@gmail.com
      </p>
    </>
  );
}
