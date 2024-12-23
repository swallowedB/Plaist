import { NavLink } from "react-router";

import images from "../../../assets/images/importImages";
import { trimStringWithEllipsis } from "../../../utills/main/fomatter";

export default function BestCourseCardItem({
  courseData,
}: {
  courseData: Course;
}) {
  const { _id, title, image, likes } = courseData;
  const doc = JSON.parse(title);
  console.log(doc.locationObjs);
  return (
    <div
      className="min-w-[205px] h-[298px] bg-white rounded-3xl shadow-blue relative flex flex-col items-center hover:scale-105 hover:shadow-strong
    duration-[0.2s] ease-in-out"
    >
      <NavLink to={`/course-content/${_id}`}>
        {/* 이미지 컨테이너 */}
        <div className="relative">
          <img
            src={image ? image : images.course_background_img}
            alt="Course Image"
            className="w-[186px] h-[222px] mt-[10.93px] rounded-2xl object-cover"
          />
        </div>

        {/* 텍스트 정보 */}
        <div className="w-full px-2 mt-2">
          {/* 제목과 평점 */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-custom-black font-pretendard">
              {trimStringWithEllipsis(doc.courseTitle, 12)}
            </p>

            <div className="flex flex-row items-center">
              {/* 하트 아이콘 */}
              <div className="flex flex-row items-center">
                <img
                  src={images.like_filled_icon}
                  alt="Like Filled Icon"
                  className="h-[9px] w-[10px]"
                />
                <p className="font-pretendard text-[13px] font-regular text-custom-black pl-[2px]">{`${likes.length}`}</p>
              </div>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex items-center mt-1">
            {/* 주소 아이콘 */}
            <img
              src={images.location_icon}
              alt="Location Icon"
              className="w-4 h-4 mr-1"
            />
            <p className="font-pretendard text-[13px] text-custom-gray">
              {trimStringWithEllipsis(
                doc.locationObjs
                  ? Array.from(
                      new Set(
                        doc.locationObjs?.map((item: LocationObj) => {
                          const locationArr = item.locationAddress.split(" ");
                          if (locationArr[0] === "서울특별시")
                            return `서울 ${locationArr[1]}`;
                          else return `${locationArr[0]} ${locationArr[1]}`;
                        }) || []
                      )
                    ).join(", ") || "주소"
                  : "입력 없음",
                12
              )}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
