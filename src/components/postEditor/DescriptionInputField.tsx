export default function DescriptionInputField({
  guidanceMessage,
  value,
  handleDescriptionChange,
}: {
  guidanceMessage: string;
  value: string;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <>
      <div className="mt-6 text-base font-semibold text-[#2E2E2E] font-pretendard text-[16px]">
        <p className="mb-[18px]">{guidanceMessage}</p>
        <textarea
          value={value}
          onChange={handleDescriptionChange}
          className="font-pretendard text-custom-black w-[645px] h-[83px] rounded-lg p-4 text-sm focus:outline-none resize-none"
          style={{ backgroundColor: "rgba(180, 184, 201, 0.2)" }}
        />
      </div>
    </>
  );
}
