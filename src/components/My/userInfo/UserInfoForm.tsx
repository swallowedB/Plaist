import { useEffect, useState } from "react";
import UserInfoInput from "./UserInfoInput";

interface UserInfoFormProps {
  fullNameLabel: string;
  emailLabel: string;
  regionLabel: string;
  defaultFullName?: string;
  defaultEmail?: string;
  // defaultRegion?: string;
  onSubmit: (updatedInfo: {fullName: string; email:string;}) => void;
}

export default function UserInfoForm({
  fullNameLabel,
  emailLabel,
  defaultFullName = "",
  defaultEmail = "",
  // defaultRegion,
  onSubmit,
}: UserInfoFormProps) {
  const [fullName, setFullName] = useState(defaultFullName);
  const [email, setEmail] = useState(defaultEmail);
  // const [region, setRegion] = useState(defaultRegion);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setFullName(defaultFullName);
    setEmail(defaultEmail);
}, [defaultFullName, defaultEmail]);

  useEffect(() => {
    setIsChanged( fullName !== defaultFullName || email !== defaultEmail );
  }, [fullName, email, defaultFullName, defaultEmail]);

  const handleSubmit = () => {
    if(isChanged){
      onSubmit({fullName, email});
    }
  };

  return (
    <div className="flex flex-col items-center gap-7">
      {/* 닉네임 */}
      <UserInfoInput 
        label={fullNameLabel} 
        id="name" 
        defaultValue={fullName}
        onChange={setFullName} 
      />
      {/* 지역 */}
      {/* <UserInfoInput 
        label={regionLabel} 
        id="region" 
        defaultValue={region} 
        onChange={setRegion}
      /> */}

      {/* 이메일 */}
      <UserInfoInput 
        label={emailLabel} 
        disabled={true}
        id="email" 
        defaultValue={email}
        onChange={setEmail}
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isChanged}
        className={`mt-4 w-44 rounded-3xl
          ${isChanged ? "bg-primary-600 hover:bg-primary-400" : "bg-primary-300 cursor-not-allowed"}
          text-white px-6 py-2 rounded hover:bg-blue-400 font-pretendard font-medium`}
      >
        저장
      </button>

    </div>
  )
}
