import { useEffect } from "react";
import { toast } from "react-toastify";

import UserInfoForm from "./UserInfoForm";

import { updateUserInfo } from "../../../api/userApi";
import { useUserStore } from "../../../stores/useInfoStore";

export default function UserInfoUpdate() {
  const { userInfo, fetchUserInfo } = useUserStore();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleUpdate = async (updatedInfo: {
    fullName: string;
    email: string;
    region: string;
  }) => {
    try {
      await updateUserInfo(updatedInfo);
      await fetchUserInfo();
      toast.success("성공적으로 저장되었습니다!");
    } catch (error) {
      toast.error("실패했습니다..o(TヘTo)");
      throw error;
    }
  };

  return (
    <div>
      <UserInfoForm
        fullNameLabel="닉네임"
        emailLabel="이메일"
        regionLabel="지역"
        defaultFullName={userInfo.fullName}
        defaultEmail={userInfo.email}
        defaultRegion={userInfo.region}
        onSubmit={handleUpdate}
      />
    </div>
  );
}
