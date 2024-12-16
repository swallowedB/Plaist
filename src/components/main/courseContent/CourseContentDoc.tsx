import images from "../../../assets/images/importImages";
import CourseContentCommentArea from "./commentArea/courseContentCommentArea";
import CourseLocationCards from "./locationCardArea/CourseLocationCards";
import { convertDateFormatt } from "../../../utills/main/formatingDate";
import { convertTime } from "../../../utills/main/timeConvert";

export default function CourseContentDoc({ courseObj }: { courseObj: Course }) {
  if (!courseObj) {
    return <div>Loading...</div>;
  }
  const doc = JSON.parse(courseObj.title);
  console.log(courseObj);
  console.log(doc);

  return (
    <div className="mb-20 font-pretendard text-custom-black">
      <div className="flex items-center gap-[11px] font-pretendard">
        <img
          src={images.course_user_profile_img}
          alt=""
          className="w-10 h-10 rounded-full bg-primary-200"
        />
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-primary-900">
            {courseObj.author.fullName}
          </p>
          <p className="text-xs text-custom-gray">
            {convertDateFormatt(courseObj.createdAt)}
          </p>
        </div>
      </div>

      <div className="mt-[43px]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold leading-8">
            {doc.courseTitle}
          </h1>

          <div className="flex items-center justify-center gap-1 mt-4">
            <img
              src={images.like_not_filled_border_icon}
              alt="좋아요 아이콘"
              className="h-[12px] w-[13px] "
            />
            <p className="font-regular text-[13px] leading-5">
              {courseObj.likes.length}
            </p>
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
              {doc.locationObjs[0].locationAddress}
            </p>
          </div>

          <div className="text-[14px] font-medium leading-5 text-custom-gray">
            <p>{doc.courseDescription}</p>
          </div>

          <div className="flex gap-[14px] h-6 mb-10">
            <div className="flex items-center gap-[11px]">
              <img
                src={images.course_estimated_time_icon}
                alt="예상 이동 시간 아이콘"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[14px] text-primary-600 font-medium leading-[10px]">{`예상 소요 시간: ${convertTime(
                doc.estimatedTime
              )}H`}</p>
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
      <CourseContentCommentArea />
    </div>
  );
}
