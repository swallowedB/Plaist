import UserInfoInput from "./UserInfoInput";

interface UserInfoFormProps {
  nicknameLabel: string;
  emailLabel: string;
  regionLabel: string;
}

export default function UserInfoForm({
  nicknameLabel,
  emailLabel,
  regionLabel,
}: UserInfoFormProps) {
  return (
    <div className="flex flex-col items-center gap-7">
      {/* 닉네임 */}
      <UserInfoInput label={nicknameLabel} id="nickname"/>
      {/* 이메일 */}
      <UserInfoInput label={emailLabel} id="email"/>
      {/* 지역 */}
      <UserInfoInput label={regionLabel} id="region"/>

    </div>
  )
}
