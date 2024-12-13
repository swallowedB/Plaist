import { useState } from "react";

export default function CourseSortToggle() {
  const [activeSort, setActiveSort] = useState(true);
  const onSortChange = () => {
    setActiveSort((prev) => !prev);
  };

  return (
    <div className="flex justify-end w-full mt-[18px] gap-3 mb-[19px] ">
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === true
            ? "text-primary-600 leading-5 "
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
        최신순
      </button>
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === false
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
