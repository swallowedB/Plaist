import images from "./../../assets/images/importImages";

export default function CourseDetailDisplay({
  estimatedTime,
  estimatedCost,
}: {
  estimatedTime: number;
  estimatedCost: number;
}) {
  return (
    <div className="flex gap-8 text-sm text-primary-600 font-pretendard">
      <div className="flex items-center gap-2">
        <img
          src={images.course_estimated_time_icon}
          alt="이동시간 아이콘"
          className="w-4 h-4"
        />
        <span>
          이동시간{" "}
          {(estimatedTime / 60).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
          })}
          시간
        </span>
      </div>
      <div className="flex items-center gap-2">
        <img
          src={images.course_budget_icon}
          alt="예상금액 아이콘"
          className="w-4 h-4"
        />
        <span>
          예상금액{" "}
          {estimatedCost.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
          })}
          원
        </span>
      </div>
    </div>
  );
}
