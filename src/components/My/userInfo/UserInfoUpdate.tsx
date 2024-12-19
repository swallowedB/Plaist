import { useUserStore } from "../../../stores/useInfoStore";
import UserInfoForm from "./UserInfoForm";
import { getUserInfo, updateUserInfo } from "../../../api/userApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function UserInfoUpdate() {
  const { userInfo, setUserInfo, fetchUserInfo } = useUserStore();

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleUpdate = async (updatedInfo: {
    fullName: string;
    email: string;
    region: string;
  }) => {
    try {
      await updateUserInfo(updatedInfo);
      const refreshedData = await getUserInfo();
      setUserInfo(refreshedData);
      toast.success("성공적으로 저장되었습니다!");
    } catch (error) {
      console.error("업데이트에 실패했습니다", error);
      toast.error("실패했습니다..o(TヘTo)");
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
