import profile_arrow from "../../../assets/images/profile_arrow.svg";
import { Link } from "react-router";

export default function UserInfoNav() {
  return (
    <div className="flex flex-row items-center justify-between w-[572px] mb-[110px]">
    <nav className="w-10">
      <Link to="/my-page" >
        <img src={profile_arrow} alt="마이페이지로 돌아가기"/>
      </Link>
    </nav>
    <p className="font-pretendard font-semiBold text-primary-700 text-lg">Edit Profile</p>

    <nav>
      <Link to="/my-page" >
        <p className="font-pretendard font-semiBold text-primary-700 text-base w-10">Done</p>
      </Link>
    </nav>
  </div>
  )
}
