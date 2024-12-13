import { NavLink } from "react-router";
import images from "../../../../assets/images/importImages";

export default function CourseLocationCardItem({
  title,
  location,
  imageUrl,
  contentId,
  contact,
  category,
}: ICourseLocationCardItemProps) {
  return (
    <div className="w-[558px] h-[154px] bg-white rounded-3xl shadow-default flex items-center pt-[12px] pb-[13px] px-[13px] gap-7">
      {/* 이미지 컨테이너 */}
      <div>
        <img
          src={imageUrl}
          alt="Course Image"
          className="w-[123px] h-[129px] rounded-2xl object-cover"
        />
      </div>

      {/* 텍스트 정보 */}
      <div className="flex flex-col gap-[37px]">
        {/* 제목과 카테고리 */}
        <div className="flex items-center gap-[6px]">
          <NavLink
            to={`/view-course-content/${contentId}`}
            className={`flex items-end gap-[6px]`}
          >
            <p className="text-[21px] font-medium text-custom-black font-pretendard">
              {title}
            </p>
            <p className={`text-custom-gray text-[13px] font-medium leading-5`}>
              {category}
            </p>
          </NavLink>
        </div>

        <div className="flex flex-col items-start ">
          {/* 연락처와 주소 */}
          <div className="flex items-center">
            <img
              src={images.course_phone_num_icon}
              alt="Location Icon"
              className="w-4 h-4 mr-1"
            />
            <p className="font-pretendard text-[13px] text-custom-black">
              {contact}
            </p>
          </div>

          <div className="flex items-center">
            <img
              src={images.location_icon}
              alt="Location Icon"
              className="w-4 h-4 mr-1"
            />
            <p className="font-pretendard text-[13px] text-custom-gray">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
