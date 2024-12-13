import { NavLink } from "react-router";
import images from "../../../assets/images/importImages";

export default function CourseLocationCardItem({
  title,
  rating,
  location,
  imageUrl,
  contentId,
  contact,
}: ICourseCardItemProps) {
  return (
    <div className="w-[558px] h-[154px] bg-white rounded-3xl shadow-blue relative flex items-center pt-[12px] pb-[13px] px-[13px]">
      {/* 이미지 컨테이너 */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Course Image"
          className="w-[123px] h-[129px] rounded-2xl object-cover"
        />
        
      </div>

      {/* 텍스트 정보 */}
      <div className="w-full px-4 mt-2">
        {/* 제목과 평점 */}
        <div className="flex items-center gap-[6px]">
          <NavLink to={`/view-course-content/${contentId}`}>
            <p className="text-[21px] font-medium text-custom-black font-pretendard">
              {title}
            </p>
          </NavLink>
          <div className="flex flex-row items-center">
            {/* 하트 아이콘 */}
            <div className="flex flex-row items-center">
              <img
                src={images.like_filled_icon}
                alt="Like Filled Icon"
                className="h-[9px] w-[10px]"
              />
              <p className="font-pretendard text-[13px] font-regular text-custom-black pl-[2px]">{`${rating}`}</p>
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
            {location}
          </p>
        </div>

        {/* 연락처 */}
        <div>
          <p>{contact}</p>
        </div>
      </div>
    </div>
  );
}
