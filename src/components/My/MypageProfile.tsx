import { Link } from "react-router"
import profileICon from "../../assets/images/profile_icon.svg";
import exprofileImg from "../../assets/images/exProfileImg.svg";

export default function MypageProfile() {
  return (
    <>
      <div
        style={{backgroundImage: `url(${exprofileImg})`}} 
        className="w-[96px] h-[96px] bg-[#f3d0d9] rounded-full shadow-backblue"/>
      <nav>
        <Link to="/user-info">
          <img
            className="absolute top-[70px] left-[300px]" 
            src={profileICon} 
            alt="회원 정보 변경" />
        
        </Link>
      </nav>
      <p className="text-primary-700 text-[24px] font-bold font-pretendard mt-[8px]">Timmy</p>
      <p className="text-primary-600 text-[14px] font-regular font-pretendard">Timmy2@gmail.com</p>    
    </>
  );
}
