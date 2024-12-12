import images from "../../../assets/images/importImages";

export default function CourseContentDoc() {
  return (
    <div className="font-pretendard">
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
              alt="Like Icon"
              className="h-[12px] w-[13px] "
            />
            <p className="font-regular text-[13px] leading-5">4.7k</p>
          </div>
        </div>

        <div className="mt-[25px] flex flex-col gap-5">
          <div className="flex items-center justify-start">
            <img
              src={images.location_icon}
              alt="location_icon"
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

          <div className="flex gap-[14px]">
            <div>
              <img src="" alt="" />
              <p>{`이동시간 1`}</p>
            </div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-600">이동시간: 1~2시간</p>
        <p className="flex items-center space-x-1 text-sm text-gray-600">
          <span>4.7k</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3.172 4.828a4 4 0 015.656 0L10 6.172l1.172-1.344a4 4 0 115.656 5.656L10 17.172l-6.828-6.828a4 4 0 010-5.656z" />
          </svg>
        </p>
      </div>
    </div>
  );
}
