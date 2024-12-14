interface InputFieldProps {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
  onFocus,
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
        onFocus={onFocus}
        placeholder={placeholder}
        className={`
          w-full h-12 rounded-[18px] px-[25px] font-pretendard
          text-[16px] text-custom-black focus:outline-none 
          placeholder: font-medium placeholder: custom-gray ${
            value && value.trim() !== ""
              ? "bg-custom-input"
              : "bg-custom-input/50"
          }`}
      />
      {<p className="font-pretendard font-medium ml-2 mt-2 text-xs text-primary-700">{error}</p>}
    </div>
  );
}
