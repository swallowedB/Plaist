import { useState } from "react";

interface UserInfoInputProps {
  label: string;
  id: string;
}

export default function UserInfoInput({label, id}:UserInfoInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <label 
        className="w-[409px] font-pretendard font-medium text-base text-custom-black mb-1 px-[31px]"
        htmlFor={id}>{label}</label>
      <input 
        id={id}
        type="text" 
        className={`
          w-[409px] h-[48px] rounded-[30px] shadow-blue
          placeholder:font-pretendard placeholder:text-base placeholder:text-primary-800
          px-[31px]
          ${isFocused ? "border-blue-500 bg-blue-50" : "border-gray-300"}
          
          `}
          onFocus={()=> setIsFocused(true)}
          onBlur={()=> setIsFocused(false)}
          placeholder="Timmy"
          />
    </div>
  )
}
