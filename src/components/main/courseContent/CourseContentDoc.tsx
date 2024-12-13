import images from "../../../assets/images/importImages";
import CourseLocationCards from "./CourseLocationCards";

export default function CourseContentDoc() {
  return (
    <div className="font-pretendard text-custom-black">
      <div className="flex items-center gap-[11px] font-pretendard">
        <div className="w-10 h-10 bg-[#FFEADF] rounded-full" />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-primary-900">Timmy</p>
          <p className="text-xs text-custom-gray">2024.10.09</p>
        </div>
      </div>

      <div className="mt-[43px]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold leading-8">
            ✨ 단체 연말 모임
          </h1>

          <div className="flex items-center justify-center gap-1 mt-4">
            <img
              src={images.like_not_filled_border_icon}
              alt="좋아요 아이콘"
              className="h-[12px] w-[13px] "
            />
            <p className="font-regular text-[13px] leading-5">4.7k</p>
          </div>
        </div>

        <div className="mt-[25px] flex flex-col gap-5">
          <div className="flex items-center justify-start">
            <img
              src={images.location_icon}
              alt="장소 아이콘"
              className="w-[14.66px] h-4"
            />
            <p className="text-xs leading-5 font-regular text-custom-gray">
              성수동
            </p>
          </div>

          <div className="text-[14px] font-medium leading-5 text-custom-gray">
            <p>
              이 모임 코스는 인원수 6~7명 모임에 가장 좋은 코스입니다. 2024년이
              얼마 남지 않았을 때, 모두 모여 시간을 보내기 좋은 코스로, 무드
              있는 코스입니다.
            </p>
          </div>

          <div className="flex gap-[14px] h-6 mb-10">
            <div className="flex items-center gap-[11px]">
              <img
                src={images.course_estimated_time_icon}
                alt="예상 이동 시간 아이콘"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[14px] text-primary-600 font-medium leading-[10px]">{`이동시간 1~2시간`}</p>
            </div>

            <div className="flex items-center gap-[11px]">
              <img
                src={images.course_budget_icon}
                alt="예상 예산 아이콘"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[14px] text-primary-600 font-medium leading-[10px]">{`예상금액 2~3만원`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[31px] flex flex-row gap-3 text-[14px] text-primary-500 font-medium leading-[10px] ">
        <span className="pt-[10px] pb-[11px] px-6 border-[2px] border-primary-500 border-solid rounded-[30px]">
          데이트
        </span>
        <span className="pt-[10px] pb-[11px] px-6 border-[2px] border-primary-500 border-solid rounded-[30px]">
          모임
        </span>
        <span className="pt-[10px] pb-[11px] px-6 border-[2px] border-primary-500 border-solid rounded-[30px]">
          회식
        </span>
      </div>

      <CourseLocationCards />
    </div>
  );
}
