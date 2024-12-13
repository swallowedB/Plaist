import UserInfoInput from "./UserInfoInput";

interface UserInfoFormProps {
  nicknameLabel: string;
  emailLabel: string;
  regionLabel: string;
  defaultNickname: string;
  defaultEmail: string;
  defaultRegion: string;
}

export default function UserInfoForm({
  nicknameLabel,
  emailLabel,
  regionLabel,
  defaultNickname="bboa",
  defaultEmail="bboa00@gmail.com",
  defaultRegion="서울",
}: UserInfoFormProps) {
  return (
    <div className="flex flex-col items-center gap-7">
      {/* 닉네임 */}
      <UserInfoInput label={nicknameLabel} id="nickname" defaultValue={defaultNickname} />
      {/* 이메일 */}
      <UserInfoInput label={emailLabel} id="email" defaultValue={defaultEmail} />
      {/* 지역 */}
      <UserInfoInput label={regionLabel} id="region" defaultValue={defaultRegion} />

    </div>
  )
}
