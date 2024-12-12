import { Link, useNavigate } from "react-router";
import { postLogout } from "../../api/api";
import profileImg_N from "../../assets/images/profileImg_N_icon.svg";
import exprofilImg from "../../assets/images/exProfileImg.svg";
import profile_arrow from "../../assets/images/profile_arrow.svg";
import UserInfoForm from "./userInfo/UserInfoForm";

export default function MypageUserInfo() {
  const navigate = useNavigate();
  return (
    <div
      className={`
      flex items-center`}
    >
      <div
        className={`w-[647px] bg-primary-400/25 rounded-[25px] 
            border-2 border-white z-10 shadow-default mt-[95px] h-[900px]`}
      >
        {/*창 안의 요소*/}
        <div className="flex flex-col items-center mt-[43px] h-full">
            {/* 프로필 수정 상단네비 */}
            <div className="flex flex-row items-center justify-between w-[572px] mb-[110px]">
              <nav className="w-10">
                <Link to="/my-page" >
                  <img src={profile_arrow} alt="마이페이지로 돌아가기"/>
                </Link>
              </nav>
              <p className="font-pretendard font-semiBold text-primary-700 text-lg">Edit Profile</p>
              <button className="font-pretendard font-semiBold text-primary-700 text-base w-10">Done</button>
            </div>

            {/* 프로필 사진 및 이름 */}
            <div className="flex flex-col items-center">
              <div
                style={{backgroundImage: `url(${exprofilImg})`}} 
                className="w-[96px] h-[96px] bg-[#f3d0d9] rounded-full shadow-backblue "/>
                <img
                  className="absolute top-[347px] left-[400px] shadow-backblue" 
                  src={profileImg_N} 
                  alt="프로필 수정 아이콘" />

              <p className="text-white text-[24px] font-bold font-pretendard mt-[8px]">Timmy</p> 
            </div>

            {/* 사용자 정보 */}
            <div className="my-[58px]">
              <UserInfoForm
                nicknameLabel="닉네임"
                emailLabel="이메일"
                regionLabel="지역"
              />
            </div>

            {/*로그아웃 버튼*/}
            <button
              className="font-pretendard font-medium text-primary-700 text-[13px]"
              onClick={() => {
                postLogout(navigate);
              }}> 로그아웃 </button>

        </div>
      </div>
    </div>
  );
}
