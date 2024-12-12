import React from "react";

export default function AllCourseSortToggle({ activeSort, onSortChange }) {
  return (
    <div className="flex justify-end w-full mt-[18px] gap-3 ">
      <button
        className={`py-2 text-[14px] font-pretendard ${
          activeSort === "latest"
            ? "text-primary-600 leading-5 "
            : "text-custom-gray"
        }`}
        onClick={() => onSortChange("latest")}
      >
        최신순
      </button>
      <button
        className={`py-2 text-[14px] font-pretendard ${
          activeSort === "popular"
            ? "text-primary-600 leading-5"
            : "text-custom-gray"
        }`}
        onClick={() => onSortChange("popular")}
      >
        인기순
      </button>
    </div>
  );
}
