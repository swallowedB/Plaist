interface InputFieldProps {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // onBlur 속성 추가
  error?: string | false;
  className?: string;
}

export default function InputField({
  id,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  error,
}: InputFieldProps) {
  return (
    <div className="mb-6">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full h-12 rounded-[18px] px-[25px] font-pretendard
          text-[16px] text-custom-black focus:outline-none 
          placeholder: font-medium placeholder: custom-gray ${
          value && value.trim() !== "" ? "bg-custom-input" : "bg-custom-input/50"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
