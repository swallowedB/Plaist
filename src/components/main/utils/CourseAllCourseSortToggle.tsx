import { useSortMainStore } from "../../../stores/main/comment/useSortStore";

export default function CourseAllCourseSortToggle() {
  const { activeSort, setActiveSort } = useSortMainStore();

  const onSortChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const state = e.currentTarget.innerText === "최신순" ? "latest" : "popular";
    if (state === activeSort) return;

    setActiveSort(state);
    // console.log(activeSort);
  };
  
  return (
    <div className="flex gap-3">
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === "latest"
            ? "text-primary-600"
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
        최신순
      </button>
      <button
        className={`py-2 text-[14px] font-pretendard font-regular ${
          activeSort === "popular"
            ? "text-primary-600"
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
      인기순
      </button>
    </div>
  )
}
