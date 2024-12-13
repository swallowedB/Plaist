import { useUserStore } from "../../../stores/userInfoStore";
import UserInfoForm from "./UserInfoForm";

export default function UserInfoUpdate() {
  const { userInfo, updateUserInfo } = useUserStore();

  const handleDone = (updatedInfo: {nickname: string; email:string; region: string }) => {
    updateUserInfo(updatedInfo);
  };

  return (
    <div>
      <UserInfoForm 
        nicknameLabel="닉네임"
        emailLabel="이메일"
        regionLabel="지역"
        defaultNickname={userInfo.nickname}
        defaultEmail={userInfo.email}
        defaultRegion={userInfo.region}
        onSubmit={handleDone}
      />
    </div>
  )
}
