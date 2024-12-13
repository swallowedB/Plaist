import { useState } from "react";
import checkIcon from "../../../assets/images/userInfoCheck_icon.svg";

interface UserInfoInputProps {
  label: string;
  id: string;
  defaultValue?: string;
}

export default function UserInfoInput({label, id, defaultValue}:UserInfoInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <label 
        className="w-[409px] font-pretendard font-medium text-base text-custom-black mb-1 px-[31px]"
        htmlFor={id}>{label}</label>
      {/* input field */}
      <div className="relative">
        <img src={checkIcon} alt="Ischecked?" className="absolute top-5 left-[370px]" />
        <input 
          id={id}
          type="text" 
          className={`
            w-[409px] h-[48px] rounded-[30px] shadow-blue focus:outline-none
            placeholder:font-pretendard placeholder:text-base placeholder:text-primary-800
            px-[31px]
            ${isFocused ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            
            `}
            onFocus={()=> setIsFocused(true)}
            onBlur={()=> setIsFocused(false)}
            placeholder={defaultValue}
        />
          </div>
    </div>
  )
}
