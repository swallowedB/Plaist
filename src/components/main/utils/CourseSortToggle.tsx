import { useState } from "react";

export default function CourseSortToggle() {
  const [activeSort, setActiveSort] = useState<"latest" | "popular">("latest");

  const onSortChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const state = e.currentTarget.innerText;
    if (state === activeSort) return;
    setActiveSort(state === "최신순" ? "latest" : "popular");
  };

  return (
    <div className="flex gap-3" >
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === "latest"
            ? "text-primary-600 leading-5"
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
        최신순
      </button>
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === "popular"
            ? "text-primary-600 leading-5"
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
        인기순
      </button>
    </div>
  );
}
