export default function AllCourseSortToggle({ activeSort, onSortChange }) {
  return (
    <div className="flex justify-end w-full mt-[18px] gap-3 mb-[19px] ">
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === "latest"
            ? "text-primary-600 leading-5 "
            : "text-custom-gray"
        }`}
        onClick={() => onSortChange("latest")}
      >
        최신순
      </button>
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
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
