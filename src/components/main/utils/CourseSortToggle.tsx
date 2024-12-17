import { useSortStore } from "../../../stores/main/comment/useSortStore";

export default function CourseSortToggle() {
  const { activeSort, setActiveSort } = useSortStore();

  const onSortChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const state = e.currentTarget.innerText === "최신순" ? "latest" : "oldest";
    if (state === activeSort) return;

    setActiveSort(state);
    // console.log(activeSort);
  };

  return (
    <div className="flex gap-3">
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
          activeSort === "oldest"
            ? "text-primary-600 leading-5"
            : "text-custom-gray"
        }`}
        onClick={onSortChange}
      >
        작성순
      </button>
    </div>
  );
}
