import profileImg_N from "../../../assets/images/profileImg_N_icon.svg";
import { useState } from "react";
import { useUserStore } from "../../../stores/userInfoStore";

export default function UserInfoProfile() {
  const { userProfilePic, updateUserPic, userInfo, } = useUserStore();
  const [ profilePic, setProfilePic ] = useState(userProfilePic);

  const handlePicUpload = async () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if(file) {
        const fileURL = URL.createObjectURL(file);
        setProfilePic(fileURL);
        updateUserPic(fileURL);
      }
    }
    fileInput.click();

  };

  return (
    <div className="flex flex-col items-center">
    <div
      style={{backgroundImage: `url(${profilePic})` }} 
      className="w-[96px] h-[96px] bg-[#f3d0d9] rounded-full shadow-backblue "/>

      <img
        className="absolute top-[254px] left-[340px] cursor-pointer" 
        src={profileImg_N} 
        alt="프로필 수정 아이콘" 
        onClick={handlePicUpload} 
      />

    <p className="text-primary-700 text-[24px] font-bold font-pretendard mt-[8px]">
      {userInfo.nickname}
    </p> 
  </div>
  )
}
