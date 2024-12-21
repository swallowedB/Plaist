import { twMerge } from "tailwind-merge";

interface PostingGuideTitleProps {
  alignClass?: string;
  titleText: string;
  mt?: number;
}

export default function PostingGuideTitle({
  alignClass = "flex item-center",
  titleText,
  mt = 0,
}: PostingGuideTitleProps) {
  const containerClass = twMerge(alignClass, `mt-[${mt}px]`);

  return (
    <div className={containerClass}>
      <h1 className="text-[36px] font-bold text-primary-800 font-pretendard">{titleText}</h1>
    </div>
  );
}
