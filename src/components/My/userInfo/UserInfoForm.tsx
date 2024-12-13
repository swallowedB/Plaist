import { useEffect, useState } from "react";
import UserInfoInput from "./UserInfoInput";

interface UserInfoFormProps {
  nicknameLabel: string;
  emailLabel: string;
  regionLabel: string;
  defaultNickname?: string;
  defaultEmail?: string;
  defaultRegion?: string;
  onSubmit: (updatedInfo: {nickname: string; email:string; region:string}) => void;
}

export default function UserInfoForm({
  nicknameLabel,
  emailLabel,
  regionLabel,
  defaultNickname="bboa",
  defaultEmail="bboa00@gmail.com",
  defaultRegion="서울",
  onSubmit,
}: UserInfoFormProps) {
  const [nickname, setNickname] = useState(defaultNickname);
  const [email, setEmail] = useState(defaultEmail);
  const [region, setRegion] = useState(defaultRegion);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const hasChanges =
      nickname !== defaultNickname ||
      email !== defaultEmail ||
      region !== defaultRegion;
    setIsChanged(hasChanges);
  }, [nickname, email, region, defaultNickname, defaultEmail, defaultRegion]);

  const handleSubmit = () => {
    if(isChanged){
      onSubmit({nickname, email, region});
    }
  };

  return (
    <div className="flex flex-col items-center gap-7">
      {/* 닉네임 */}
      <UserInfoInput 
        label={nicknameLabel} 
        id="nickname" 
        defaultValue={nickname}
        onChange={(value) => setNickname(value)} 
      />
      {/* 이메일 */}
      <UserInfoInput 
        label={emailLabel} 
        id="email" 
        defaultValue={email}
        onChange={(value) => setEmail(value)}
      />
      {/* 지역 */}
      <UserInfoInput 
        label={regionLabel} 
        id="region" 
        defaultValue={region} 
        onChange={(value) => setRegion(value)}
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isChanged}
        className={`mt-4 w-44 rounded-3xl
          ${isChanged ? "bg-primary-600 hover:bg-primary-400" : "bg-primary-200 cursor-not-allowed"}
          text-white px-6 py-2 rounded hover:bg-blue-400 font-pretendard font-medium`}
      >
        저장
      </button>

    </div>
  )
}
