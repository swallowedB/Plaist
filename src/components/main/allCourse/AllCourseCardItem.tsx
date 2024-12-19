import { NavLink } from "react-router";
import images from "../../../assets/images/importImages";
import {
  splitBySpaceUntilIndex1,
  trimStringWithEllipsis,
} from "../../../utills/main/fomatter";

export default function AllCourseCardItem({
  courseItem,
}: {
  courseItem: Course;
}) {
  if (!courseItem) {
    return <div>loading...</div>;
  }
  const { image, likes, _id } = courseItem || {};
  const courseDocData = JSON.parse(courseItem?.title);

  if (!courseDocData) return <h1>404</h1>;

  return (
    <div
      className="w-[315px] h-[258px] bg-white rounded-3xl shadow-blue relative flex flex-col items-center hover:scale-105 hover:shadow-strong
    duration-[0.2s] ease-in-out"
    >
      <NavLink to={`/course-content/${_id}`}>
        {/* 이미지 컨테이너 */}
        <div className="relative">
          <img
            src={image ? image : images.course_background_img}
            alt="Course Image"
            className="w-[290px] h-[177px] mt-[10.93px] rounded-2xl object-cover"
          />
        </div>

        {/* 텍스트 정보 */}
        <div className="w-full px-2 mt-3">
          {/* 제목과 평점 */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-custom-black font-pretendard max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap flex-grow">
              {trimStringWithEllipsis(courseDocData.courseTitle, 23)}
            </span>

            <div className="flex flex-row items-center">
              {/* 하트 아이콘 */}
              <div className="flex flex-row items-center">
                <img
                  src={images.like_filled_icon}
                  alt="Like Filled Icon"
                  className="h-[9px] w-[10px]"
                />
                <p className="font-pretendard text-[13px] font-regular text-custom-black pl-1">
                  {likes.length}
                </p>
              </div>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex items-center mt-1 max-w-[275px]">
            {/* 주소 아이콘 */}
            <img
              src={images.location_icon}
              alt="Location Icon"
              className="w-4 h-4 mr-1"
            />
            <p className="font-pretendard text-[13px] text-custom-gray overflow-hidden text-ellipsis whitespace-nowrap">
              {courseDocData.locationObjs
                ? splitBySpaceUntilIndex1(
                    courseDocData.locationObjs[0].locationAddress
                  )
                : "입력 없음"}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
