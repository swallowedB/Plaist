export default function TitleInputField({
  value,
  handleTitleChange,
}: {
  value: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleTitleChange}
        placeholder="제목을 입력해주세요."
        className="w-[299px] h-[36px] text-[36px] font-pretendard text-custom-black font-semibold p-0 placeholder-custom-gray focus:outline-none"
      />
    </>
  );
}
