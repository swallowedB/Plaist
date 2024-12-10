interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // onBlur 속성 추가
  error?: string | false;
}

export default function InputField({
  id,
  label,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  error,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-zinc-800 text-sm font-medium mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-12 rounded-2xl px-4 text-sm text-zinc-800 placeholder-gray-500 ${
          value && value.trim() !== "" ? "bg-white" : "bg-neutral-100/50"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
