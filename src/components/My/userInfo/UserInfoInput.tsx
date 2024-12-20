import { useState } from "react";

interface UserInfoInputProps {
  label: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  onChange?: (value: string) => void;
}

export default function UserInfoInput({label, id, placeholder, value, onChange, disabled}:UserInfoInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <label 
        className="w-[409px] font-pretendard font-medium text-base text-custom-black mb-1 px-[31px]"
        htmlFor={id}>{label}</label>

      {/* input field */}
      <div className="relative font-pretendard font-medium text-custom-black">
        <input 
          id={id}
          type="text" 
          disabled={disabled}
          className={`
            w-[409px] h-[48px] rounded-[30px] shadow-blue focus:outline-none
            placeholder:font-pretendard placeholder:text-base placeholder:text-primary-800
            px-[31px] disabled:bg-custom-input/60 disabled:text-custom-gray
            ${isFocused ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            
            `}
          onFocus={()=> setIsFocused(true)}
          onBlur={()=> setIsFocused(false)}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  )
}
